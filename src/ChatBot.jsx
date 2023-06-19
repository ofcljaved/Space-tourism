import React, { useRef, useState } from "react";
function ChatBot() {
  const [open, isOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "system",
      message: "Hi there, How can I help you today?",
    },
  ]);
  const chatBox = useRef(null);

  const generateResponse = (input) => {
    if (input === "hello") {
      setChatLog((prev) => [
        ...prev,
        { user: "system", message: "Hi there, How can i assist you?" },
      ]);
    } else if (input === "who are you?" || input === "who are you") {
      setChatLog((prev) => [
        ...prev,
        { user: "system", message: "I'm your assistant." },
      ]);
    } else {
      setChatLog((prev) => [
        ...prev,
        {
          user: "system",
          message: "I did not understand it. Please contact the customer care.",
        },
      ]);
    }
    setTimeout(() => {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }, 100);
  };

  const handleChat = () => {
    isOpen((prev) => !prev);
  };
  const sendInput = () => {
    setChatLog((prev) => [...prev, { user: "user", message: input.trim() }]);
    generateResponse(input.trim().toLowerCase());
    setInput("");
  };

  return (
    <div className={`chatContainer ${open && "mobileChat"}`}>
      {open && (
        <div className="chatBot">
          <div className="botTitle">
            <h2>Chatbot</h2>
            <span className="material-symbols-outlined" onClick={handleChat}>
              close
            </span>
          </div>
          <ul className="chatBox" ref={chatBox}>
            {chatLog.map((chat, index) => (
              <li
                className={`chat ${
                  chat.user === "system" ? "receive" : "send"
                }`}
                key={index}
              >
                {chat.user === "system" && (
                  <span className="material-symbols-outlined">smart_toy</span>
                )}
                <p>{chat.message}</p>
              </li>
            ))}
          </ul>
          <div className="chatInput">
            <textarea
              placeholder="Enter a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            ></textarea>
            <span className="material-symbols-outlined" onClick={sendInput}>
              send
            </span>
          </div>
        </div>
      )}
      <div
        className={`toggleChat ${open && "chatOpened"}`}
        onClick={handleChat}
      >
        {open ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">mode_comment</span>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
