import styled from "styled-components";

export const FooterContainer = styled.div`

background: var(--back-color);
color: var(--title-color);

section.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10vh;
    padding: 0px;
    margin: 0;
}

section.footer div.footer--rodape {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
}

section.footer div.footer--rodape p {
    padding: 0;
    margin: 0;
}

`