import logger from "@/logger";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import Link from "next/link";

export interface PostDto {
  author: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
  body: string;
  cover: string;
  id: string;
  markdown: string;
  slug: string;
  title: string;
}

export async function getAllPosts(page: string) {
  const response = await fetch(
    `http://localhost:3043/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    return logger.error("Ops, alguma coisa correu mal!");
  }
  logger.info("posts carregado com sucesso!");
  const posts = response.json();
  return posts;
}


interface HomeProps {
  searchParams: { [key: string]: string | undefined };
}
export default async function Home({ searchParams }:HomeProps) {
  const currentPage = searchParams?.page || '1'
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <main className={styles.main}>
      {posts.map((post: PostDto) => (
        <CardPost post={post} key={post.id} />
      ))}
      {prev && <Link href={`/?page=${prev}`}> Página anterior</Link>}
      {next && <Link href={`/?page=${next}`}> Próxima página</Link>}
    </main>
  );
}
