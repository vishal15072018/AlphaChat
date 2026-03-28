import './App.css';
import Sidebar from "./sidebar.jsx";
import ChatWindow from "./chatWindow.jsx";
import { MyContext } from "./mycontext.jsx";
import { useState } from 'react';
import { v1 as uuidv1 } from "uuid";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  };

  return (
    <MyContext.Provider value={providerValues}>
      {/* 🔥 MAIN FIX */}
      <div className="app">
        <Sidebar />
        <ChatWindow />
      </div>
    </MyContext.Provider>
  );
}

export default App;