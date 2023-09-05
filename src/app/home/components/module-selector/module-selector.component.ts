import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

export interface ModuleData {
  name: string;
  url: string;
  imagePath: string;
  disabled: boolean;
  description: string;
}

@Component({
  selector: 'ktbz-module-selector',
  templateUrl: 'module-selector.component.html',
  styleUrls: ['./module-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ModuleSelectorComponent implements OnInit {
  @Input() data!: ModuleData;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigate() {
    if (!this.data.disabled) {
      this.router.navigate([this.data.url]);
    }
  }
}
