import React from 'react';
import PropTypes from 'prop-types';
import {Container} from "react-bootstrap";

const inputStyles={
  padding: "5px",
  marginTop: "2.5px",
  marginBottom: "2.5px",
  display: "block"
}

function ReuseableForm(props){
  return(
    <React.Fragment>
      <Container>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          style={inputStyles}
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          style = {inputStyles}
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          style ={inputStyles}
          type='number'
          name='price'
          placeholder='Beer Price' />
        <input
          style= {inputStyles}
          type='text'
          name='alcoholContent'
          placeholder='alcohol %' />
        <input
          style={inputStyles}
          type='number'
          min = '124'
          name='beer'
          placeholder='Number of Beers' />
          <button type='submit'>{props.buttonText}</button>
      </form>
      </Container>
    </React.Fragment>
  );
}

ReuseableForm.propTypes = {
  formSubmissionHandler: PropTypes.func, 
  buttonText: PropTypes.string
};

export default ReuseableForm;