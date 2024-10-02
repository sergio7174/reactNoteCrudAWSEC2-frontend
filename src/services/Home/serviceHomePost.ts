export const fetchPosts = async (setPosts: any) => {
  try {
    //const response = await fetch('http://localhost:3500/posts');
    const response = await fetch(`${process.env.REACT_APP_API_SERVER_URL}/posts`);
    const data = await response.json();
    console.log(data);
    setPosts(data.posts);
  } catch (error) {
    console.log(error);
  }
};
