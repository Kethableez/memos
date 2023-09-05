import { Injectable } from '@angular/core';
import { QUESTIONS } from 'src/app/shared/consts/obrona.const';
import { Question } from 'src/app/shared/models/question.model';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  private readonly availableQuestions: { [key: string]: Question[] } = {
    obrona: QUESTIONS,
  };

  constructor() {}

  get availableQuestionKeys(): string[] {
    return Object.keys(this.availableQuestions);
  }

  getQuestionPoolByKey(key: string): Question[] {
    return this.availableQuestions[key];
  }
}
