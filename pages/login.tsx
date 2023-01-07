import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export async function getStaticProps() {
  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openaiapp = new OpenAIApi(configuration);
  const response = await openaiapp.createImage({
    prompt:
      "anime two littile sisters with pink and yellow dress playing in woods",
    n: 1,
    size: "1024x1024",
  });
  const imageUrl = response.data.data[0].url;
  return {
    props: { imageUrl },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30, // In seconds };
  };
}

export default function Login({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl}></img>
    </div>
  );
}
