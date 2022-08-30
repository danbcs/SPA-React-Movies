import { MovieBanner } from "../components/MovieBanner";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const imgUrl = backdrop_path => `${BASE_IMG_URL}${backdrop_path}`;

export const Banner = ({ movies }) => {
    var slideImages = [];
    movies.map(m =>
        slideImages.push(
            {
                "url": imgUrl(m.backdrop_path),
                "caption": m.title,
                "id": m.id
            }
        )
    );

    return (
        <div>
            <MovieBanner slideImages = {slideImages}/>
        </div>
    );
};