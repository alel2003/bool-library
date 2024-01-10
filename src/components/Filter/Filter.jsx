import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteFilter,
  selectOnlyFavoriteFilter
} from "../../redux/slices/FilterSlice";
import "./Filter.css";

const Filter = () => {

  const dispatch = useDispatch()

  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFIlterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={handleTitleFIlterChange}
            type="text"
            placeholder="filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            type="text"
            placeholder="filter by author..."
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavorite}
              onChange={handleOnlyFavoriteChange}
            />
            Only Favorite
          </label>
        </div>
        <button
          type="button"
          onClick={handleResetFilters}
        >
          RESET FILTERS
        </button>
      </div>
    </div>
  );
};

export default Filter;
