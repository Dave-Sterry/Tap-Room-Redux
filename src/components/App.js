import React from 'react';
import Header from './Header';
import KegControl from './KegControl';
import Body from './Body';
import {Container} from "react-bootstrap";

function App() {

  const controlStyles ={
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div style = {controlStyles}>
          <KegControl />
        </div>
      </Container>
        <div style = {controlStyles}>
          < Body />
        </div>
    </React.Fragment>
  );
}

export default App;
