// index.js
import 'dotenv/config';
import { Configuration, OpenAIApi } from 'openai';

async function main() {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const client = new OpenAIApi(config);

  const response = await client.createChatCompletion({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: 'あなたはアートキュレーターです。' },
      { role: 'user',   content: '静かな部屋に合う絵画を教えてください。' },
    ],
  });

  console.log(response.data.choices[0].message.content);
}

main().catch(console.error);
