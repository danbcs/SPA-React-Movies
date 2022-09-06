import styled from "styled-components";

export const ContatoContainer = styled.section`

background-color: #3e4a61;
padding: 40px 150px;

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
padding: 50px;
background-color: rgba(0,0,0,0.1);
box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
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
background-color: rgba(255,255,255,0.7);
}

section.formcontato div.formcontato--contacto div.formcontato--text form textarea {
resize: none;
background-color: rgba(255,255,255,0.7);
}

section.formcontato div.formcontato--contacto div.formcontato--text form button {
background-color: var(--font-color);
color: var(--title-color);
}

section.formcontato div.formcontato--contacto div.formcontato--text form button:hover {
background-color: var(--link-color);
}
`