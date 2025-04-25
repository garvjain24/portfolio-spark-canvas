
export interface Comment {
    id: number;
    author: string;
    content: string;
    date: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: string;
    tags: string[];
    backlinks: {
      title: string;
      url: string;
    }[];
    comments?: Comment[];
  }