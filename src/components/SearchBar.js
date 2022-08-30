import { Link } from "react-router-dom";

export const SearchBar = () => (
    <li>
        <div>
            <form action="/">
                <input type="text" placeholder="O que deseja encontrar?" name="search" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </li>
);