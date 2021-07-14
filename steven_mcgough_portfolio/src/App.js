import React from "react";
import styled from "styled-components";

const App = ({ name, age }) => {
  name="Steven McGough " 
  age="20"

  return (
    <AppContainer>
      {name}
      {age}
    </AppContainer>
  );
};

export default App;


// display: flex;
// text-align: center;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// @media (prefers-reduced-motion: no-preference) {}
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
`;
