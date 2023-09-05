import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SummaryData, SummaryService } from '../../services/summary.service';
import { filter, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ktbz-summary',
  templateUrl: 'summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class SummaryComponent implements OnInit {
  constructor(private summaryService: SummaryService, private router: Router) {}
  summary$ = this.summaryService.summary$.pipe(
    tap((value) => {
      if (!value) {
        this.router.navigateByUrl('/learning/init');
      }
    }),
    filter((value) => !!value)
  );

  ngOnInit() {}

  getWidth(summary: SummaryData, type: 'wrong' | 'correct') {
    if (type === 'wrong') {
      return (
        (Object.keys(summary.problematic).length / summary.totalQuestions) * 100
      );
    } else {
      return (summary.nonProblematic / summary.totalQuestions) * 100;
    }
  }

  getLabel(summary: SummaryData, type: 'wrong' | 'correct') {
    if (type === 'wrong') {
      return `${Object.keys(summary.problematic).length} / ${
        summary.totalQuestions
      }`;
    } else {
      return `${summary.nonProblematic} / ${summary.totalQuestions}`;
    }
  }

  getProblematicQuestionsRows(summary: SummaryData) {
    return Object.entries(summary.problematic).map((value) => ({
      question: value[0],
      num: value[1],
    }));
  }

  redirectToInit() {
    this.router.navigateByUrl('/learning/init');
  }
}
