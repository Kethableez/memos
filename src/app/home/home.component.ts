import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ModuleData,
  ModuleSelectorComponent,
} from './components/module-selector/module-selector.component';

const modules: ModuleData[] = [
  {
    name: 'Nauka',
    url: 'learning/init',
    imagePath: '/assets/imgs/learning.png',
    disabled: false,
    description:
      'Moduł nauki pozwala na skuteczne uczenie się zagadnień przy pomocy interaktywnego flow',
  },
  {
    name: 'Kreator pytań',
    url: 'creator',
    imagePath: '/assets/imgs/creator.png',
    disabled: true,
    description:
      'Moduł kreatora służy do opracowywania zestawów pytań do nauki',
  },
];

@Component({
  selector: 'ktbz-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ModuleSelectorComponent],
})
export class HomeComponent implements OnInit {
  modules = modules;

  constructor() {}

  ngOnInit() {}
}
