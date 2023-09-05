import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionCard } from 'src/app/shared/models/question-card.model';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'ktbz-step',
  templateUrl: 'step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SectionComponent],
})
export class StepComponent implements OnInit {
  @Input() questionCard!: QuestionCard;

  constructor() {}

  ngOnInit() {}
}
