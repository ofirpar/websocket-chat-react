import { useEffect, useState } from "react";
import "./App.css";
import {
  listenToMessages,
  openWsConnection,
  sendMessage,
} from "./websocket/websocket-handler";
import { IMessage } from "./types/message";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    (async () => {
      await openWsConnection();
      await listenToMessages((event) => {
        setMessages((current) => [
          ...current,
          { user: "other", message: event.data.toString() },
        ]);
      });
    })();
  }, []);

  async function sendMessageHandler() {
    if (input) {
      await sendMessage(input);
      setMessages((current) => [...current, { user: "me", message: input }]);
      setInput("");
    }
  }

  return (
    <div className="main-container">
      <ChatWindow messages={messages} />
      <div className="input-area">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
}

export default App;
