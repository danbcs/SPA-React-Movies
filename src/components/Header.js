import { HeaderContainer } from "../styles/HeaderContainer";
import { Login } from "./Login";
import { MainMenu } from "./MainMenu";
import { SearchBar } from "./SearchBar";

export const Header = () => (
    <HeaderContainer>
        <ul>
            <li>CastroMovies</li>
            <SearchBar />
            <Login />
        </ul>
        <MainMenu />
    </HeaderContainer>
);