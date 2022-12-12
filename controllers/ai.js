import { configuration } from "../config/index.js";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi(configuration);

// Create Image Using Dall-E
const createimage = async (req, res) => {
  const { prompt, size } = req.body;
  console.log(prompt);
  const response = await openai.createImage({
    prompt: `${prompt}`,
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  res.status(200).json({
    status: "Successful",
    image: image_url,
    description: prompt,
  });

  res.end();
};
export default createimage;
