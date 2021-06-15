import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
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
