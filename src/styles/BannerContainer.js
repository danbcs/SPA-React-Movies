import styled from "styled-components";

export const StyleContainer = styled.div`
    .slide-container {
        width: 100%;
        margin: 0 auto;
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
        height: 400px;
    }

    span {
        padding: 10px;
        border-radius: 5px;
        font-size: 40px;
        color: black;
        background: rgba(141, 174, 224, 0.2);
        text-align: center;
    }
`