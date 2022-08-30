import { Link } from "react-router-dom";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

const imgUrl = poster_path => `${BASE_IMG_URL}${poster_path}`

export const MovieItem = ({ movie, tag }) => (
    <div>
        <li >
            <Link to={`${tag}/${movie.id}`}>
                <img src={imgUrl(movie.poster_path)} />
            </Link>
        </li>
        <li>
            <b>
                {'title' in movie ? movie.title : movie.name}
            </b>
        </li>
        <li > ⭐ {movie.vote_average} </li>
    </div>

);