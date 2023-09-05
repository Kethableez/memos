import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SummaryData {
  nonProblematic: number;
  problematic: { [key: string]: number };
  time: { min: string; sec: string } | null;
  totalQuestions: number;
}

@Injectable({ providedIn: 'root' })
export class SummaryService {
  private learningTime: { min: string; sec: string } | null = null;
  private problematicQuestions: { [key: string]: number } = {};
  private nonProblematicQuestions: string[] = [];
  private totalQuestions: number = 0;

  summary$ = new BehaviorSubject<SummaryData | null>(null);

  constructor() {}

  addSummary() {
    this.summary$.next({
      nonProblematic: this.nonProblematicQuestions.length,
      problematic: this.problematicQuestions,
      time: this.learningTime,
      totalQuestions: this.totalQuestions,
    });
  }

  addLearningTime(time: { min: string; sec: string }): void {
    this.learningTime = time;
  }

  addTotalQuestions(total: number) {
    this.totalQuestions = total;
  }

  addProblematicQuestion(questionStr: string) {
    if (questionStr in this.problematicQuestions) {
      this.problematicQuestions[questionStr]++;
    } else {
      this.problematicQuestions[questionStr] = 1;
    }
  }

  addNonProblematicQuestion(questionStr: string) {
    if (!this.nonProblematicQuestions.includes(questionStr)) {
      this.nonProblematicQuestions.push(questionStr);
    }
  }
}
