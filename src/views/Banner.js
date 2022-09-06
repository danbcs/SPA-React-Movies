import { MovieBanner } from "../components/MovieBanner";

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const imgUrl = backdrop_path => `${BASE_IMG_URL}${backdrop_path}`;

export const Banner = ({ movies }) => {
    var slideImages = [{
        "url": 'house_of_the_dragon_banner.png',
        "caption": "House of the Dragon",
        "id": "94997"
    }, {
        "url": '/rings_power_banner.png',
        "caption": "The Rings of Power",
        "id": "84773"
    }, {
        "url": "/sandman_banner.png",
        "caption": "The Sandman",
        "id": "90802"
    }];

    /*movies.map(m =>
        slideImages.push(
            {
                "url": imgUrl(m.backdrop_path),
                "caption": m.title,
                "id": m.id
            }
        )
    );*/

    return (
        <div>
            <MovieBanner slideImages={slideImages} />
        </div>
    );
};