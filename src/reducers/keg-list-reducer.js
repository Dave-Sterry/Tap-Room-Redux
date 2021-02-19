export default (state = {}, action) => {
  const{name, brand, price, alcoholContent, beer, id} = action;
  switch(action.type){
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name,
          brand, 
          price, 
          alcoholContent,
          beer,
          id
        }
      });
      default:
        return state;
  }
};