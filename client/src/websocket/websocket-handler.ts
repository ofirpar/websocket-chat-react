let websocket: WebSocket | null = null;

export async function openWsConnection() {
  new Promise((resolve) => {
    websocket = new WebSocket("ws://localhost:3001");

    websocket.onopen = () => {
      console.log("WebSocket is open.");
      const interval = setInterval(() => {
        if (websocket?.readyState === WebSocket.OPEN) {
          websocket?.send("Hello from client!");
          clearInterval(interval); // Stop checking once the message is sent
          resolve(websocket);
        }
      }, 100);
    };
  });
}

export async function closeWsConnection() {
  if (websocket) {
    websocket.close();
  }
}

export async function sendMessage(msg: string) {
  console.log("Sending message", { msg });
  websocket?.send(msg);
}

export async function listenToMessages(
  cb: (event: MessageEvent<string>) => void
) {
  if (websocket) {
    websocket.onmessage = (event) => {
      cb(event);
    };
  }
}
