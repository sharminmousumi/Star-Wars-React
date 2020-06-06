import { createAction, createReducer } from "@reduxjs/toolkit";
const addToFavourite= createAction("add to favourite");
const deleteFavourite= createAction("delete to Favourite");


const actions = {deleteFavourite,addToFavourite};
const initialState = [
    
  ];
  const reducer = createReducer(initialState, {
    [addToFavourite]: (state, action) => 
              [...state, action.payload ],

     [deleteFavourite]: (state,action) =>
       state.filter(cartItem => cartItem.name !== action.payload)
    
})
  
 export { actions, reducer };