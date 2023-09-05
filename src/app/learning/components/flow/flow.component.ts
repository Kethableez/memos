import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { FlowService } from '../../services/flow.service';
import { filter, tap } from 'rxjs';
import { Router } from '@angular/router';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'ktbz-flow',
  templateUrl: 'flow.component.html',
  styleUrls: ['./flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, StepComponent],
})
export class FlowComponent implements OnInit {
  @HostListener('document:keydown.a') keyDownA() {
    if (this.repetitionModeActive) this.markAsWrong();
  }

  @HostListener('document:keydown.d') keyDownD() {
    if (this.repetitionModeActive) {
      this.markAsCorrect();
    }
  }

  @HostListener('document:keydown.space') keyDownSpace() {
    if (!this.repetitionModeActive) this.nextQuestion();
  }

  @HostListener('document:keydown.r') keyDownR() {
    if (this.repetitionModeActive) {
      this.restart();
    }
  }

  @HostListener('document:keydown.backspace') keyDownBackspace() {
    if (this.repetitionModeActive) {
      this.stop();
    }
  }

  get repetitionModeActive() {
    return this.flowService.repetitionModeActive;
  }

  constructor(private flowService: FlowService, private router: Router) {}

  card$ = this.flowService.nextCard$.pipe(filter((card) => !!card));
  progress$ = this.flowService.progress$.pipe(filter((progress) => !!progress));
  timer$ = this.flowService.timer$;

  ngOnInit() {
    if (this.flowService.isDataFlowEmpty()) {
      this.router.navigateByUrl('/learning/init');
    }
  }

  nextQuestion() {
    this.flowService.nextQuestion();
  }

  markAsCorrect() {
    this.flowService.markAsCorrect();
  }

  markAsWrong() {
    this.flowService.markAsBad();
  }

  restart() {
    this.flowService.restart();
  }

  stop() {
    this.flowService.stopLearning();
  }
}
