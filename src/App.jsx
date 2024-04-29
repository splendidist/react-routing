import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to my website</h1>
        {/* {" "} makes a little space before the word test */}
        {/* /test can be anything, as these pages don't exist it will bring the catch error */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/test">Test</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
