import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="537878be-55e6-479f-bfc1-a11444f4d0dc"
      userName="Anuj Shany"
      userSecret="anuj@2001"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    // vid to  be continued at 51:14
  );
};

export default App;
