const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite-preview-02-05" });

const prompt = `"This is the greatest mystery of Malaysia in the world of aviation history. On March 8, 2014, a flight took off from Kuala Lumpur, Malaysia, bound for Beijing, China. About 40 minutes into the flight, the plane disappeared from radar. There were 239 people on the flight, including 227 passengers and 12 crew members. The control center in Malaysia noticed that after 40 minutes the airplane had disappeared from its radar and they thought it had entered Vietnamese airspace. The control center in Vietnam also detected the plane on its radar but it soon disappeared from their screens as well. After the shocking news of Malaysia Airlines flight 370's disappearance, search and rescue teams started a huge operation. Investigators found something strange while the plane was last seen on VNME's radar. It showed up on military radar over the end of in sea, hundreds of miles away. This sudden change confused experts and sparked many theories. To this day, what happened to MH370 is one of the biggest mysteries in aviation history. To this day, no one knows where the plane is. If you found this video helpful, please follow for more updates." this is my youtube short script, i want you to write me a 6 to 12 word long title (title should be a question, start like 'how, what, who, etc') and write a description explaining the story (in 50 to 60 words) in json array format.`;

const result = await model.generateContent(prompt);
console.log(result.response.text());
