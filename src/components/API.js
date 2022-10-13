import axios from "axios";

const GetPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        // Authorization: "",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    return res;
  } catch (err) {
    console.warn("Main API ERROR " + err);
  }
};

export { GetPosts };
