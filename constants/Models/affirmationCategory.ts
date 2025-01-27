export interface AffirmationCategory {
  title: string;
  data: AffirmationPreview[];
}

export interface AffirmationPreview {
  id: number;
  text: string;
  image: any;
}