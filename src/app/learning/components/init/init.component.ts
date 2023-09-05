import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { Question } from 'src/app/shared/models/question.model';
import { FlowService } from '../../services/flow.service';
import { Router } from '@angular/router';

export interface LearningData {
  questions: Question[];
  initialRep: number;
  maxRep: number;
  sectionsVisible: boolean;
  examMode: boolean;
  randomizer: boolean;
}

@Component({
  selector: 'ktbz-init',
  templateUrl: 'init.component.html',
  styleUrls: ['./init.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class InitComponent implements OnInit {
  step = 1;

  selectedQuestionPoolKey: string | null = null;

  selectedQuestionIds: number[] = [];

  settingsForm!: FormGroup;

  constructor(
    private readonly questionsService: QuestionsService,
    private flowService: FlowService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private builder: FormBuilder
  ) {}

  get questionKeys(): string[] {
    return this.questionsService.availableQuestionKeys;
  }

  get questions(): { id: number; heading: string }[] {
    if (this.selectedQuestionPoolKey) {
      return this.questionsService
        .getQuestionPoolByKey(this.selectedQuestionPoolKey)
        .map((question) => ({ id: question.id, heading: question.heading }));
    } else return [];
  }

  ngOnInit() {
    this.initForm();
  }

  cancel() {}

  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  startLearning() {
    const { initialRep, maxRep, sectionsVisible, examMode, randomizer } =
      this.settingsForm.value;

    if (this.selectedQuestionPoolKey) {
      const questionPool = this.questionsService
        .getQuestionPoolByKey(this.selectedQuestionPoolKey)
        .filter((question) => this.selectedQuestionIds.includes(question.id));

      const learningData: LearningData = {
        initialRep,
        maxRep,
        sectionsVisible,
        examMode,
        randomizer,
        questions: questionPool,
      };
      this.flowService.setLearningFlowData(learningData);
      this.router.navigateByUrl('/learning/flow');
    }
  }

  select(selector: 'all' | 'none') {
    if (selector === 'all') {
      this.selectedQuestionIds = this.questions.map((question) => question.id);
    } else {
      this.selectedQuestionIds = [];
    }
  }

  selectQuestion(key: string) {
    if (this.selectedQuestionPoolKey === key) {
      this.selectedQuestionPoolKey = null;
    } else {
      this.selectedQuestionPoolKey = key;
    }
  }

  selectQuestionId(id: number) {
    if (this.selectedQuestionIds.includes(id)) {
      this.selectedQuestionIds = this.selectedQuestionIds.filter(
        (selectedId) => selectedId !== id
      );
    } else {
      this.selectedQuestionIds = [...this.selectedQuestionIds, id];
    }
  }

  private initForm() {
    this.settingsForm = this.builder.nonNullable.group({
      initialRep: new FormControl<number>(1, Validators.required),
      maxRep: new FormControl<number>(1, Validators.required),
      sectionsVisible: new FormControl<boolean>(false, Validators.required),
      examMode: new FormControl<boolean>(false, Validators.required),
      randomizer: new FormControl<boolean>(true, Validators.required),
    });
  }
}
