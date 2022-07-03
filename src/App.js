import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommandedVideo from "./RecommandedVideo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__page">
              <Sidebar />
              <RecommandedVideo />
            </div>
          }
        ></Route>

        <Route
          path="/search/:searchTerm"
          element={
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          }
        ></Route>
        <Route path="/about" element={<h1>About Page</h1>}></Route>
      </Routes>

      {/* <h1>Hello clever programmers, let's get started😎</h1> */}
      {/* Header section */}
    </div>
  );
}

export default App;
