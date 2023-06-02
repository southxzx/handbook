interface IPost {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  date?: string;
  tags?: string[];
}

export type { IPost };
