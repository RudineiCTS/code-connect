import logger from "@/logger";

async function getPostBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return {};
  }
  logger.info("Posts obtidos com sucesso");
  const data = await response.json();
  if (data.length === 0) {
    return {};
  }
  return data[0];
}

function PagePost() {
  return <h1>Page Post</h1>;
}

export default PagePost;