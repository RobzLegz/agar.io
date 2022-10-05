import React from "react";
import PageModule from "../PageModule";
import { useEffect, useState } from "react";
import { Channel, Socket } from "phoenix";

const Test = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [mySocket, setMySocket] = useState<Socket | null>(null);
  const [myChannel, setMyChannel] = useState<Channel | null>(null);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (!mySocket) {
      let socket = new Socket("ws://localhost:4000/socket", {});
      setMySocket(socket);
    } else {
      mySocket.connect();
      if (!myChannel) {
        let channel = mySocket.channel("upload:lobby", {});
        setMyChannel(channel);
      } else {
        if (!joined) {
          myChannel
            .join()
            .receive("ok", (resp) => {
              console.log("Joined successfully", resp);
            })
            .receive("error", (resp) => {
              console.log("Unable to join", resp);
            });

          setJoined(true);
        } else {
          myChannel.on("shout", (payload) => {
            if (messages.length === 0) {
              setMessages([payload]);
            } else {
              setMessages([...messages, payload]);
            }
          });
        }
      }
    }
  }, [mySocket, myChannel, joined, messages]);

  const submit = (e: any) => {
    e.preventDefault();

    if (!myChannel) {
      return;
    }

    myChannel.push("shout", { username: username, message: message });
  };

  return (
    <PageModule title="Agar.io" description="Agar.io, but bad">
      <form>
        <div>
          {messages.map((message, i) => (
            <div key={i}>
              <strong>{message.username}</strong>
              <p>{message.message}</p>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button onClick={(e) => submit(e)}>send</button>
        </div>
      </form>
    </PageModule>
  );
};

export default Test;
