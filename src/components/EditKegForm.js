import React from 'react';
import ReuseableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegForm (props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: parseInt(event.target.price.value),beer: parseInt(event.target.beer.value), alcoholContent: event.target.alcoholContent.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReuseableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="UpdateKeg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes ={
  keg:PropTypes.object, 
  onEditKeg: PropTypes.func
};

export default EditKegForm;