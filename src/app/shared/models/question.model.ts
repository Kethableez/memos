import { SubQuestion } from './sub-question.model';

export interface Question {
  id: number;
  heading: string;
  subQuestions: SubQuestion[];
}
