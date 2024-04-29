import { useSearchParams } from "react-router-dom";

export function SortOrderForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <form>
      <label>
        Sort by:
        <select value={searchParams.get("sort") || ""} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </form>
  );
}
