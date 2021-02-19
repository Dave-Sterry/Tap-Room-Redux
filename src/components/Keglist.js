import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return(
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg
          whenKegClicked = {props.onKegSelection} 
          name = {keg.name}
          brand = {keg.brand}
          price = {parseInt(keg.price)}
          alcoholContent = {keg.alcoholContent}
          beer ={parseInt(keg.beer)}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes ={
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;