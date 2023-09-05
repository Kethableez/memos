import { Section } from './section.model';

export interface QuestionCard {
  id: number;
  mainHeading: string;
  subHeading: string | null;
  sections: Section[];
  repLeft: number;
  wrongAns: boolean;
  sectionsVisible: boolean;
}
