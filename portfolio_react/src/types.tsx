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

export type IPortfolio = {
  src: string;
  title: string;
  GitHub: string;
  LiveDemo: string;
  delay: string;
};

export type ITestimonial = {
  src: string;
  name: string;
  description: string;
};

export type IContactData = {
  icon: string;
  title: string;
  variant: string;
  link: string;
};
