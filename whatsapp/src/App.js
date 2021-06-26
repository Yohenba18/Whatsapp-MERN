import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      // console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("3e00697874ce96ac8590", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  console.log(messages);
  
  return (
    <div className="app">
      <div className="app__body">
        {/*side bar*/}
        <Sidebar />
        {/*chat component*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;
