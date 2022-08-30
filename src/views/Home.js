import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { Banner } from "./Banner";

export const Home = () => {

    const tag1 = 'movie';
    const tag2 = 'tv';

    const [movies, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [moviesTop, setMoviesTop] = useState([]);


    const fetchMovies = async () => {
        const { data } = await MoviesService.getMoviesPopular('1');

        setMovies(data.results);
    };

    const fetchTv = async () => {
        const { data } = await MoviesService.getTvPopular('1');
        setTv(data.results);
    };

    const fetchMoviesTop = async () => {
        const { data } = await MoviesService.getMoviesTop('1');
        setMoviesTop(data.results);
    };

    useEffect(() => {
        fetchMovies();
        fetchTv();
        fetchMoviesTop();
    }, []);

    return (
        <div>
            <Banner movies={movies} />
            <MoviesContainer>
                <h2>Top Filmes</h2>
                <MoviesList movies={moviesTop} tag={tag1}/>
                <h2>Filmes Populares</h2>
                <MoviesList movies={movies} tag={tag1}/>
                <h2>Séries Populares</h2>
                <MoviesList movies={tv} tag={tag2}/>
            </MoviesContainer>
        </div>
    );
};