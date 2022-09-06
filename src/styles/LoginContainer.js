import styled from "styled-components";

export const LoginContainer = styled.div`
.app {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 60vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background-color: var(--back-color);
  color: white;
}

input[type="text"],
input[type="password"] {
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

input[type="submit"] {
  margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
  background: var(--font-color);
  border: 1px solid var(--font-color);
  color: #fff;
  padding: 10px 20px;
}

input[type="submit"]:hover {
  background: var(--link-color);
}

.button-container {
  display: flex;
  justify-content: center;
}

.login-form {
  
  padding: 2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.69);
}

.list-container {
  display: flex;
}

.error {
  color: red;
  font-size: 12px;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px;
}
`