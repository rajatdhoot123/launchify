"use client";

import { useActions, useUIState } from "ai/rsc";

export default function Blog() {
  const { submitMessage } = useActions();
  const [messages, setMessages] = useUIState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    setMessages([
      ...messages,
      { id: Date.now(), role: "user", display: event.target.message.value },
    ]);

    const response = await submitMessage(data);

    setMessages((prev) => [...prev, response]);
  };

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.display}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <input type="text" name="keywords" />
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
