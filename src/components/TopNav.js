import { Link } from "react-router-dom";
import { TopNavContainer } from "../styles/TopNavContainer";
import 'font-awesome/css/font-awesome.min.css';

export const TopNav = () => (
    <TopNavContainer>
        <div className="topnav">
            <div className="style--logo">
                <img src="https://cdn-icons-png.flaticon.com/512/864/864818.png" alt="logo CastroMovies" />
                <p className="active">CastroMovies</p>
            </div>
            <Link to="/">
                <p >Home</p>
            </Link>
            <Link to="/about">
                <p>About</p>
            </Link>
            <div className="search-container">
                <form action="/">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <Link to="/login">
                <p className="login-container">Login</p>
            </Link>

        </div>
    </TopNavContainer>
);