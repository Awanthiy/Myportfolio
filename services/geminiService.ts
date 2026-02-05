
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userInput,
      config: {
        systemInstruction: `You are an AI assistant for Awanthi Malawanage, a UI/UX Designer and Developer from Sri Lanka. 
        Awanthi is a 4th-year student at NSBM Green University.
        Awanthi has 12 Design projects on Behance and 5 Development projects. 
        Skills include: React, React Native, TypeScript, Node.js, Sequelize, Figma, and CMS tools (WordPress).
        Be professional, warm, and creative. Use the colors Aqua and Dark Blue as themes in your tone. 
        Refer to the portfolio as "Awanthi.dev".`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my knowledge base. Please reach out to Awanthi directly via the contact form!";
  }
};
