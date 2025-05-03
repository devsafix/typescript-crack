{
  //
  // Asynchronous TypeScript

  // Promises
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

  // calling the promise
  const showData = async (): Promise<string> => {
    try {
      const data: string = await createPromise();
      //   console.log(data); // Hello, World!
      return data;
    } catch (error) {
      console.error(error); // No data found
      return "Error occurred"; // Ensure a string is always returned
    }
  };

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const getPost = async (): Promise<Post> => {
    const res = await fetch("https://jsonplaceholder.org/posts/1");
    const data = await res.json();
    return data;
  };

  //
}
