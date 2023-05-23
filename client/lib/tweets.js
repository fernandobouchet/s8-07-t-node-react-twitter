const createTweet = async (tweet) => {
  const response = await fetch(`http://localhost:8000/api/create`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      content: tweet.content,
      hashtags: tweet.hashtags,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).catch((e) => console.log(e));

  console.log(response);
  return response;
};

export { createTweet };
