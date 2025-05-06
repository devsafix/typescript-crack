{
  // ------------------ Asynchronous TypeScript ------------------

  // ----------- Basic Promise Example -----------

  // Function that returns a Promise of string
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Hello, World!";
      if (data) {
        resolve(data);
      } else {
        reject("No data found");
      }
    });
  };

  // Function that calls the promise using async/await
  const showData = async (): Promise<string> => {
    try {
      const data: string = await createPromise();
      // console.log(data); // Output: Hello, World!
      return data;
    } catch (error) {
      console.error(error); // Output: No data found
      return "Error occurred"; // Fallback value in case of error
    }
  };

  // ----------- API Call Example with Typing -----------

  // Define the shape of a Post object
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  // Function to fetch a post from an API
  const getPost = async (): Promise<Post> => {
    const response = await fetch("https://jsonplaceholder.org/posts/1");

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const data: Post = await response.json();
    return data;
  };

  // Example usage
  // (async () => {
  //   const post = await getPost();
  //   console.log(post);
  // })();
}
