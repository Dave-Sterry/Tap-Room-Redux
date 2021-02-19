import React from 'react';
//find image to use for header!
import {Container, Row, Col} from "react-bootstrap";



function Header(){

  const headerStyles = {
    backgroundColor: "#e0af26",
    border:'solid 2px',
    textAlign:'center'
  }
  const imageStyles={
    padding:'5px'
  }
  return(
    <React.Fragment>
      <Container fluid >
        <div style={headerStyles}>
          <Row>
            <Col>
              <h1>Jean Claude Van Damme's Taproom</h1>
              <h2>We have a full selction of Belgian Beers!</h2>
              <h3>All bar stools are 6 feet apart. For doing the splits</h3>
              <h4>Manage your kegs below, get started by clicking "Add a Keg"</h4>
            </Col>
            <Col>
              <img src="https://media.giphy.com/media/WR8XvgP6EoJBB0H41h/giphy.gif" alt="gif of Jean Claude Van Damme" height="225px" style={imageStyles}/>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Header;