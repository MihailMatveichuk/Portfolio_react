export type IArticle = {
  title: string;
  description: string;
};

export type IServices = {
  title: string;
  paragraf: {
    first: string;
    second: string;
    third: string;
    forth?: string;
  };
};
