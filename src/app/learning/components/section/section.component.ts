import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Section } from 'src/app/shared/models/section.model';

@Component({
  selector: 'ktbz-section',
  templateUrl: 'section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class SectionComponent {
  @Input() section!: Section;

  @Input() sectionVisible = false;
  constructor() {}

  toggleVisibility() {
    this.sectionVisible = !this.sectionVisible;
  }

  paragraphClass() {
    const x = [
      this.section.extraClass ?? '',
      this.sectionVisible ? '' : 'skeleton__paragraph',
    ].filter((value) => value !== null || value !== undefined) as string[];
    return x;
  }
}
