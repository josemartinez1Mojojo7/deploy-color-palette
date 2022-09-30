import { FaSearch } from "react-icons/fa";
import "./Search.css";
const Search = () => {
  return (
    <div className="search-container">
        <div className="fav">
            
            <input className="input-css" type="text" placeholder="Buscar"></input>
            <div>
                <FaSearch/>
            </div>
        </div>
    </div>
  )
}

export default Search;