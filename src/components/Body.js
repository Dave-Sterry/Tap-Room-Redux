import React from 'react';
import {Container} from "react-bootstrap";

function Body(){
  
  // const bodyStyles = {
  //   backgroundColor: "#e0af26",
  //   border:'solid 2px',
  //   textAlign:'center'
  // }
  return(
    <React.Fragment>
      <Container fluid>
        {/* <div styles={bodyStyles}> */}
          <h3>Check out some of our fan favorites</h3>
          <h4>The Dopple Impact:</h4>
          <p>A traditional Dopple with a little extra</p>
            <img src="https://media.giphy.com/media/UsUiXuqJoYVvq/giphy.gif" height='200px' width='225px'/>  
          <h4>Street Cider: </h4>
          <p>You may be a beer fan but our cider has been known to make people dance like they just don't care </p>
          <img src="https://media.giphy.com/media/z62vT2IVVNT56/giphy.gif" height='200px'/>
          <h4>Universal Saison</h4>
          <p>Taste so good you may think you can do the splits. But we suggest you leave that to a pro</p>
          <img src='https://media.giphy.com/media/kRXnZwKrPTwVq/giphy.gif' height='200px' width='225px'/>
        {/* </div> */}
      </Container>
    </React.Fragment>
  );
}

export default Body;