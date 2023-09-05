import { Injectable } from '@angular/core';
import { LearningData } from '../components/init/init.component';
import { Question } from 'src/app/shared/models/question.model';
import { Section } from 'src/app/shared/models/section.model';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  interval,
  map,
  of,
  repeat,
  take,
  takeUntil,
} from 'rxjs';
import { QuestionCard } from 'src/app/shared/models/question-card.model';
import { SummaryService } from './summary.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class FlowService {
  private randomizer = false;
  private maxRep = -1;
  private initialRep = -1;
  private examMode = false;
  private sectionsVisible = false;
  private questionCards: QuestionCard[] = [];
  private currentIndex = -1;
  private currentCard: QuestionCard | null = null;
  private learningInProgress = false;
  private questions: Question[] = [];

  get repetitionModeActive() {
    return this.randomizer && !this.sectionsVisible;
  }

  learningSummary$ = new BehaviorSubject<any>(null);
  nextCard$ = new BehaviorSubject<QuestionCard | null>(null);
  progress$ = new BehaviorSubject<{ total: number; left: number } | null>(null);
  stopTimer = new Subject<void>();
  startTimer = new Subject<void>();

  get timer$() {
    return interval(1000).pipe(
      takeUntil(this.stopTimer),
      map((value) => {
        const min: number = Math.floor(value / 60);
        const sec: number = value % 60;

        const data = {
          min: min.toString().padStart(2, '0'),
          sec: sec.toString().padStart(2, '0'),
        };
        this.summaryService.addLearningTime(data);
        return data;
      }),
      repeat({ delay: () => this.startTimer })
    );
  }

  constructor(private summaryService: SummaryService, private router: Router) {}

  resetToDefault() {
    this.randomizer = false;
    this.maxRep = -1;
    this.initialRep = -1;
    this.examMode = false;
    this.sectionsVisible = false;
    this.questionCards = [];
    this.currentIndex = -1;
    this.currentCard = null;
    this.learningInProgress = false;

    this.learningSummary$.next(null);
    this.nextCard$.next(null);
    this.progress$.next(null);
  }

  stopLearning() {
    this.summaryService.addSummary();
    this.stopTimer.next();
    this.resetToDefault();
    this.router.navigateByUrl('/learning/summary');
  }

  setLearningFlowData(data: LearningData) {
    const {
      randomizer,
      maxRep,
      initialRep,
      examMode,
      sectionsVisible,
      questions,
    } = data;
    this.questions = questions;
    this.randomizer = randomizer;
    this.maxRep = maxRep;
    this.initialRep = initialRep;
    this.examMode = examMode;
    this.sectionsVisible = sectionsVisible;

    this.initQuestionCards(questions);
  }

  isDataFlowEmpty() {
    return this.questionCards.length === 0 || this.currentCard === null;
  }

  restart() {
    this.initQuestionCards(this.questions);
  }

  private initQuestionCards(questions: Question[]) {
    let questionCards: QuestionCard[] = questions.flatMap((question) => {
      return question.subQuestions.map((subQuestion) => ({
        id: question.id,
        mainHeading: question.heading,
        subHeading: subQuestion.heading,
        sections: subQuestion.sections,
        repLeft: this.initialRep,
        wrongAns: false,
        sectionsVisible: this.sectionsVisible,
      }));
    });
    if (this.randomizer) {
      this.shuffle(questionCards);
    }
    this.questionCards = questionCards;

    this.startLearning();
  }

  startLearning() {
    this.summaryService.addTotalQuestions(this.questionCards.length);
    this.currentIndex = 0;
    this.currentCard = this.questionCards[this.currentIndex];
    this.nextCard$.next(this.currentCard);
    this.progress$.next({
      total: this.questionCards.length,
      left: this.questionCards.filter((card) => card.repLeft !== 0).length,
    });
    this.learningInProgress = true;
    this.startTimer.next();
    // this.timerEnabled.next(false);
  }

  nextQuestion() {
    if (this.currentIndex === -1) {
      this.stopLearning();
      return;
    }
    this.questionCards[this.currentIndex].repLeft--;
    this.currentIndex = this.findNextIndex();

    if (this.currentIndex === -1) {
      this.progress$.next({
        total: this.questionCards.length,
        left: this.questionCards.filter((card) => card.repLeft !== 0).length,
      });
      this.stopLearning();
      return;
    }
    this.currentCard = this.questionCards[this.currentIndex];
    this.nextCard$.next(this.currentCard);
    this.progress$.next({
      total: this.questionCards.length,
      left: this.questionCards.filter((card) => card.repLeft !== 0).length,
    });
  }

  previousQuestion() {}

  next() {
    this.progress$.next({
      total: this.questionCards.length,
      left: this.questionCards.filter((card) => card.repLeft !== 0).length,
    });

    this.currentIndex = this.findNextIndex();

    if (this.currentIndex === -1) {
      this.stopLearning();
      return;
    }

    this.currentCard = this.questionCards[this.currentIndex];
    this.nextCard$.next(this.currentCard);
  }

  markAsCorrect() {
    if (this.currentCard && this.learningInProgress) {
      const { id, subHeading, mainHeading } = this.currentCard;
      const questionStr =
        !!id && !!subHeading ? `${id} ${subHeading}` : mainHeading;

      if (this.currentIndex !== -1) {
        this.questionCards[this.currentIndex].repLeft--;
      }
      if (
        this.questionCards[this.currentIndex].repLeft === 0 &&
        !this.questionCards[this.currentIndex].wrongAns
      ) {
        this.summaryService.addNonProblematicQuestion(questionStr);
      }
    }

    this.next();
  }

  markAsBad() {
    if (this.currentCard && this.learningInProgress) {
      const { id, subHeading, mainHeading } = this.currentCard;
      const questionStr =
        !!id && !!subHeading ? `${id} ${subHeading}` : mainHeading;

      this.summaryService.addProblematicQuestion(questionStr);
      this.questionCards[this.currentIndex].wrongAns = true;

      if (this.questionCards[this.currentIndex].repLeft < this.maxRep) {
        this.questionCards[this.currentIndex].repLeft++;
      }
    }

    this.next();
  }

  private findNextIndex() {
    const indices = this.questionCards
      .map((v, i) => ({ idx: i, selectable: v.repLeft !== 0 }))
      .filter((vs) => vs.selectable);

    if (indices.length === 0) {
      return -1;
    }

    if (
      this.currentIndex === this.questionCards.length - 1 ||
      indices.filter((v) => v.idx > this.currentIndex).length === 0
    ) {
      return indices[0].idx;
    } else {
      return indices.filter((v) => v.idx > this.currentIndex)[0].idx;
    }
  }

  private shuffle(arr: QuestionCard[]) {
    var i = arr.length,
      j,
      temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
