export interface CatImageModel {
  id: string;
  tags: string[];
  created_at: string; // ISO date string
  url: string;
  mimetype: string;
}
