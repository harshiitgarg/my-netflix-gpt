import OpenAI from "openai";
import { API_KEY } from "./constants";

export const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});
