'use client'
import { PostDto } from "./page";
import styles from './page.module.css'
import { CardPost } from "@/components/CardPost";
import Link from "next/link";

interface HomePageProps{
  posts: PostDto[];
  prev: string;
  next: string;
 
}
export default function HomePage({posts, prev, next}: HomePageProps) {


    function ChangePagination(value?:string){
      
    }

    return (
      <main className={styles.main}>
        {posts.map((post: PostDto) => <CardPost post={post} key={post.id}/>)}
        {prev && <Link  href={`/?page=${prev}`}> Página anterior</Link>}
        {next && <Link  href={`/?page=${next}`}> Próxima página</Link>}
      </main>
    );
  }
  