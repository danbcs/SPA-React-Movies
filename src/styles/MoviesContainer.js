import styled from "styled-components";

export const MoviesContainer = styled.section`
    padding: 50px 120px;
    background: var(--back-color);

    h2 {
        color: var(--title-color);
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        width: 100%;
        padding: 0;
        margin: 0;
        
        div {
            
            height:380px;
            width:180px;
            padding: 0;
            margin:5px;
            img {
                max-width: 100%;
            }
            li {
                padding-top:5px;
                text-align: center;
                color: white;
            }
        }
    }

    
`