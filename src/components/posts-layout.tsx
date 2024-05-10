import { useEffect, useState } from "react";
import { PostInterface } from "@/types/post-interface";
import { fetchPosts } from "@/api/posts";

export default function Posts() {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {posts.length ? (
        <ul>
          {posts.map((post: PostInterface) => (
            <li key={post.id}>{post.title}</li>
          ))}
          )
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
