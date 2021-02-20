import React from 'react';
import KegList from './Keglist';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';


class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      editing: false
    };
  }

  handleClick =() =>{
    if (this.state.selectedKeg != null){
      const { dispatch } =this.props;
      const action = a.deselectKeg();
      dispatch(action)
    }else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      }
    }
  

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm()
    dispatch(action2);
    }
  

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const action = a.selectKeg(selectedKeg)
    dispatch(action);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } =this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({selectedKeg: null});
  }

  handleBuyBeer = (id) => {
    const { dispatch } = this.props;
    const thisKeg = this.props.masterKegList[id];
    thisKeg.beer = thisKeg.beer - 1;
    const action = a.addKeg(thisKeg);
    dispatch(action);
      this.setState({
        selectedKeg: this.props.masterKegList[id]
      });
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing){
      currentlyVisibleState=
      <EditKegForm 
        keg = {this.state.selectedKeg} 
        onEditKeg={this.handleEditingKegInList}/>
        buttonText= "Return to Keg List"
    } else if (this.props.selectedKeg != null){
      currentlyVisibleState = 
      <KegDetail 
        keg ={this.props.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick} 
        onClickingBuyBeer = {this.handleBuyBeer}/>
        buttonText= "Return to Keg List"
    } else if(this.props.formVisibleOnPage){
      currentlyVisibleState = 
      <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = 
      <KegList 
        kegList={this.props.masterKegList} 
        onKegSelection = {this.handleChangingSelectedKeg} />
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
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object
};
const mapStateToProps = state =>{
  return{
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg
  }
}
KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;


