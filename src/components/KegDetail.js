import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { keg, onClickingDelete } =props;
  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>Beer Name: {keg.name} - Brewer: {keg.brand}</h3>
      <p>Price: ${keg.price} - ABV: {keg.alcoholContent}</p>
      {/* <p>Number of Kegs: {keg.quantity}</p> */}
        {keg.beer === 0 ?
        <h3>This keg has been tapped! Sorry</h3>
        : <p>Beers left in keg: {keg.beer}</p>
        }
      
      {keg.beer > 0? <button onClick= { props.onClickingBuyBeer }>Sell a beer from this keg</button>: null}
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      {/* <button onClick={props.OnClickingBuyBeer}>Sell a beer from this keg</button> : null} */}
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg:PropTypes.object, 
  onClickEdit: PropTypes.func, 
  onClickingDelete: PropTypes.func,
  OnClickingBuyBeer: PropTypes.func
  // OnClickingRestock: PropTypes.func

}

export default KegDetail;
