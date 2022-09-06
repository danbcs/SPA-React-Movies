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
  background-color: #e9e9e9;
}

.topnav p {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav p:hover {
  background-color: #ddd;
  color: black;
}

.topnav p.active {
  background-color: #2196F3;
  color: white;
}




.topnav .search-container {
  float: right;
  padding: 14px 16px;

}

.topnav .login-container {
  float: right;
  display: block;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
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
  .topnav a, .topnav input[type=text], .topnav .search-container button {
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