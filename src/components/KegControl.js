import React from 'react';
import KegList from './Keglist';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import Keg from './Keg';

class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedKeg: null,
      editing: false
    };
  }

  handleClick =() =>{
    if (this.state.selectedKeg != null){
      this.setState({
        selectedKeg:null,
        editing: false
      });
    }else {
      const { dispatch } = this.props;
      const action = {
        type: "TOGGLE_FORM"
        }
        dispatch(action);
      }
    }
  

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, beer }= newKeg;
    const action ={
      type: "ADD_KEG",
      id: id,
      name: name,
      brand: brand, 
      price: price,
      alcoholContent: alcoholContent,
      beer: beer
    }
    dispatch(action);
    const action2 = {
      type: "TOGGLE_FORM"
    }
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, beer }= kegToEdit;
    const action ={
      type: "ADD_KEG",
      id: id,
      name: name,
      brand: brand, 
      price: price,
      alcoholContent: alcoholContent,
      beer: beer
    }
      dispatch(action);
      this.setState({
        editing:false, 
        selectedKeg:null
      });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } =this.props;
    const action ={
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleBuyBeer = () => {
    const newKeg = this.state.selectedKeg;
    const adjustedKeg = { ...newKeg, beer: newKeg.beer -1 }
    const editedMasterKegList = this.state.masterKegList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(adjustedKeg);
    this.setState({
      masterKegList: editedMasterKegList,
      selectedKeg: adjustedKeg
    });
  }

  // handleRestockKegClick =(id, r) => {
  //   console.log('reached restock');
  //   const selectedKeg = this.state.selectedKeg;
  //   const kegToRestock = Object.assign({}, selectedKeg, {quantity: selectedKeg.quantity +1});
  //   const editedMasterKegList = this.state.masterKegList.filter(keg=>keg.id !== this.state.selectedKeg.id).concat(kegToRestock);
  //   this.setState({
  //     masterKegList: editedMasterKegList,
  //     selectedKeg: kegToRestock
  //   });
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing){
      currentlyVisibleState=<EditKegForm keg = {this.state.selectedKeg} onEditKeg={this.handleEditingKegInList}/>
      buttonText= "Return to Keg List"
    } else if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg ={this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} onClickingEdit = {this.handleEditClick} onClickingBuyBeer = {this.handleBuyBeer}/>
      buttonText= "Return to Keg List"
    } else if(this.props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection = {this.handleChangingSelectedKeg} />
      buttonText= "Add a keg"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}
KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}
const mapStateToProps = state =>{
  return{
    masterKegList: state.editedMasterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;


