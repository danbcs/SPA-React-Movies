import styled from "styled-components";

export const ContatoContainer = styled.section`

padding: 80px 100px;

section.formcontato div.formcontato--contacto {
display: flex;
justify-content: space-around;
align-items: flex-start;
flex-wrap: wrap;
}

section.formcontato div.formcontato--contacto div.formcontato--esquerda {

}

section.formcontato div.formcontato--contacto div.formcontato--text--line {
border-left: 1px solid black;
height: 300px;
}

section.formcontato div.formcontato--contacto div.formcontato--text {
display: flex;
justify-content: space-evenly;
flex-direction: column;
margin: 0;
}

section.formcontato div.formcontato--contacto div.formcontato--text h2{
margin: 0;
padding: 0;
text-align: justify;
}

section.formcontato div.formcontato--contacto div.formcontato--text form {
display: flex;
justify-content: space-around;
flex-direction: column;
height: 300px;
}

section.formcontato div.formcontato--contacto div.formcontato--text form input {
height: 44px;
}

section.formcontato div.formcontato--contacto div.formcontato--text form textarea {
resize: none;
}

section.formcontato div.formcontato--contacto div.formcontato--text form button {
background-color: var(--cor-titulos);
color: var(--cor-fundo-azul);
}

section.formcontato div.formcontato--contacto div.formcontato--text form button:hover {
background-color: var(--cor-de-link);
}
`