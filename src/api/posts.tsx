import { PostInterface } from "@/types/post-interface";

export async function fetchPosts(): Promise<PostInterface[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data: PostInterface[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
