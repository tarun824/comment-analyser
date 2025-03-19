import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoIdInputScreen from "./components/VideoIdInputScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoIdInputScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
