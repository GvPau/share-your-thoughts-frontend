import { callBackend } from "./api";
import { METHODS } from "./methods";

export async function fetchPosts() {
  try {
    const posts = await callBackend({ endpoint: "posts", method: METHODS.GET });
    console.log("Success:", posts);
    return posts;
  } catch (error) {
    console.error("Error:", error);
    return new Error("Error fetching posts");
  }
}
