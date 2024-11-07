"use client"
import { CardPost } from "@/components/CardPost";


import styles from './page.module.css'
import { useSearchParams } from "next/navigation";
import logger from "@/logger";

interface PostDto {
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

async function getAllPosts(page:number){
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if(!response.ok){
    return logger.error("Ops, alguma coisa correu mal!");
  }
  logger.info("posts carregado com sucesso!");
  const posts = response.json();
  return posts;

}

export default async function Home() {
  const {data: posts} = await getAllPosts(1);
  return (
    <main className={styles.main}>
      {posts.map((post: PostDto) => <CardPost post={post} key={post.id}/>)}
    </main>
  );
}
