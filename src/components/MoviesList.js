import { MovieItem } from "./MovieItem";

export const MoviesList = ({movies, tag}) => {
    return (
        <section>
            <ul>
                {movies.filter((m,index) => index <8)
                .map((m) => <MovieItem key={m.id} movie={m} tag={tag}/> )}
            </ul>
        </section>
    );
}