import "./App.css";
import Notes from "./components/Notes";
import { Routes, Route } from "react-router-dom";
import PostData from "./components/PostData";
import Task1 from "./components/Task1";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/post-data" element={<PostData />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
      {/* <Notes /> */}
    </>
  );
}

export default App;
