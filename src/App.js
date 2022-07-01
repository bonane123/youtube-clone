import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommandedVideo from "./RecommandedVideo";
function App() {
  return (
    <div className="App">
      {/* <h1>Hello clever programmers, let's get started😎</h1> */}
      {/* Header section */}
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommandedVideo />
      </div>
    </div>
  );
}

export default App;
