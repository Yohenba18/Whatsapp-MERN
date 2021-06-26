import { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher";

function App() {
  useEffect(() => {
    const pusher = new Pusher("3e00697874ce96ac8590", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);
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
