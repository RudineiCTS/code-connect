export interface PostDto {
    author:{
      id:number;
      name:string;
      username:string;
      avatar:string;
    }
    body:string;
    cover:string;
    id:string;
    markdown:string;
    slug:string;
    title:string;
  }
