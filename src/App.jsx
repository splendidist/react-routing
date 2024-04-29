import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { UserPostsPage } from "./pages/UserPostsPage";
import { UserLikesPage } from "./pages/UserLikesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/users/splendidist">User Page</Link> |{" "}
      <Link to="*">All other pages</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<UserPostsPage />} />
          <Route path="likes" element={<UserLikesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

{
  /* {" "} makes a little space before the word test */
}
