import Image from "next/image";
import { PostDto } from "../Interfaces/PostDto";
import { Avatar } from "../Avatar";

interface CardPostProps {
  post: PostDto
}

export const CardPost = ({post}: CardPostProps) => {
  return (
    <article>
      <header>
        <figure>
          <Image src={post.cover} width={433} height={133} alt="post image"/>
        </figure>
      </header>
      <section>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar
            imageSrc={post.author.avatar}
            name={post.author.username}
        />
      </footer>
    </article>
  );
};
