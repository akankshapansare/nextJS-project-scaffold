import styles from "../styles/Home.module.css";
import { Configuration, OpenAIApi } from "openai";
import { useState, useEffect } from "react";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openaiapp = new OpenAIApi(configuration);

async function generateImage(prompt: string) {
  const response = await openaiapp.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
}

export default function Login() {
  const [imageUrl, setImageUrl] = useState("");
  const [prompt, setPrompt] = useState(
    "anime of two littile girls with beautiful eyes playing in the woods"
  );

  function handleClick() {
    generateImage(prompt).then((image) => {
      setImageUrl(image!);
    });
  }

  useEffect(() => setImageUrl(""), []);

  return (
    <div className={styles.container}>
      <a>Generate Images with AI</a>
      <div>
        <input
          placeholder="Describe the image you want to see"
          onChange={(event) => setPrompt(event.target.value)}
          value={prompt}
        />
        <button onClick={handleClick}>Submit</button>
      </div>
      <img src={imageUrl}></img>
    </div>
  );
}
