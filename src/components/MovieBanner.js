import { Slide } from "react-slideshow-image";
import { StyleContainer } from "../styles/BannerContainer";

import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";


export const MovieBanner = ({ slideImages }) => (
    <StyleContainer>
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImages, index) => {
                    return (
                        <Link to={`movie/${slideImages.id}`}>
                        <div className="each-slide" key={index}>
                                <div style={{ backgroundImage: `url(${slideImages.url})` }}>
                                    <span> {slideImages.caption} </span>
                                </div>
                        </div>
                        </Link>
                    );
                })}
            </Slide>
        </div >
    </StyleContainer >
);