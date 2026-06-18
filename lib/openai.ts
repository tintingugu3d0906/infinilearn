export async function askOpenAI(message: string, user: any) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Tu es un coach mondial expert en sport, musique, code et discipline. Tu donnes des conseils courts, précis et motivants."
        },
        {
          role: "user",
          content: `User: ${JSON.stringify(user)}\nMessage: ${message}`
        }
      ]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
