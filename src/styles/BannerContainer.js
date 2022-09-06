import styled from "styled-components";

export const BannerContainer = styled.div`

text-decoration: none;

    .slide-container {
        width: 100%;
        margin: 0;
        list-style: none;
        padding: 0;
    }

    .each-slide > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        height: 500px;
    }

    .path-text {
        height: 60px;
        width: 100%;
        
        padding-left: 1%;
        padding-top: 17%;
    }

    p {
        padding: 10px;
        border-radius: 10px;
        background: linear-gradient(90deg, rgba(0, 0, 0,0.6) 0%, rgba(0,0,0,0) 40%);
        font-size: 40px;
        text-align: left;
        color: white;
    }
`