import { ContentType } from './content-type.enum';

export interface Section {
  heading?: string;
  extraClass?: string;
  type: ContentType;
  content: any;
}
