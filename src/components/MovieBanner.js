import { Slide } from "react-slideshow-image";
import { BannerContainer } from "../styles/BannerContainer";

import 'react-slideshow-image/dist/styles.css'
import { Link } from "react-router-dom";


export const MovieBanner = ({ slideImages }) => (
    <BannerContainer>
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImages, index) => {
                    return (
                        <Link to={`tv/${slideImages.id}`} key={index} style={{ textDecoration: 'none' }} >
                            <div className="each-slide">
                                <div style={{ backgroundImage: `url(${slideImages.url} )` }}>
                                    <div className="path-text">
                                        <p> {slideImages.caption} </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </Slide>
        </div>
    </BannerContainer>
);