import Image from "next/image";
import { PostDto } from "../Interfaces/PostDto";
import { Avatar } from "../Avatar";
import styles from "./cardPost.module.css";
import Link from "next/link";

interface CardPostProps {
  post: PostDto;
}

export const CardPost = ({ post }: CardPostProps) => {
  return (
   <Link href={`/posts/${post.slug}`}  className={styles.link}>
     <article className={styles.article}>
      <header className={styles.header}>
        <figure className={styles.figure} >
          <Image 
          src={post.cover} 
          width={433} 
          height={133} 
          alt="post image"
          className={styles.image_content}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
   </Link>
  );
};
