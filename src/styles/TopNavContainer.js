import styled from "styled-components";

export const TopNavContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;

.style--logo img {
    float: left;
    display: block;
    padding: 14px 16px;
    width: 50px;
    align-items: center;
}

.topnav {
  overflow: hidden;
  padding: 0 100px;
  //background-color: #e9e9e9;
  background-color: var(--back-color);
  
}

.topnav p {
  float: left;
  display: block;
  color: var(--title-color);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav p:hover {
  background-color: var(--title-color);
  color: var(--back-color);
}

.topnav p.active {
  background-color: var(--font-color);
  color: var(--title-color);
  cursor: context-menu;
}

.topnav .search-container {
  float: right;
  padding: 18px 16px;

}

.topnav .login-container {
  float: right;
  display: block;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  color: black;
  border: none;
  background-color: var(--font-color);
  color: var(--back-color);
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background-color: var(--font-color);
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav p, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
    
`