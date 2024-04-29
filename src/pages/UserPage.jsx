import { useParams, Outlet, Link, useSearchParams } from "react-router-dom";
import { SortOrderForm } from "../components/SortOrderForm";

export function UserPage() {
  let { username } = useParams();
  const [searchParams] = useSearchParams();
  const sortType = searchParams.get("sort");

  const colours = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "magenta",
    "teal",
  ];

  if (sortType === "asc") {
    colours.sort();
  } else if (sortType === "desc") {
    colours.sort().reverse();
  }

  return (
    <>
      <h2>User: {username}</h2>
      <SortOrderForm />
      {/* sort: {sortType} */}
      {colours.map((colour) => {
        return <p key={colour}>{colour}</p>;
      })}
      <Link to={`/users/${username}`}>Users profile</Link> |{" "}
      <Link to={`/users/${username}/posts`}>Users posts</Link> |{" "}
      <Link to={`/users/${username}/likes`}>Users likes</Link>
      <hr />
      <Outlet />
    </>
  );
}
