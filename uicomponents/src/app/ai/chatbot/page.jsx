"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActions, useUIState } from "ai/rsc";

export default function Chatbot() {
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
      { id: Date.now(), role: "user", display: data.text },
    ]);
    const response = await submitMessage(data);
    setMessages((prev) => [...prev, response]);
    event.target.reset();
  };

  return (
    <div className="h-[calc(100svh_-_5rem)]">
      <div className="h-full flex flex-col justify-between space-y-5 p-5">
        <div className="flex-1 h-full overflow-scroll border rounded-md">
          <ul>
            {messages.map((message) => (
              <li
                className={`p-5 ${
                  message.role === "user" ? "bg-gray-100" : "bg-blue-100"
                }`}
                key={message.id}
              >
                {message.display}
              </li>
            ))}
          </ul>
        </div>
        <form className="flex space-x-2" onSubmit={handleSubmit}>
          <Input type="text" name="text" />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
