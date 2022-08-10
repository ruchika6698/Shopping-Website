const initialState = {
    productListData:[],
    placeOrder: {}
  };
    
  export const ProductListReducer = (state = initialState, action) => { 
      if(action.type==='PRODUCT_LIST'){
        return{
          ...state,
          productListData: action.payload
        }
      }
      if(action.type==='PLACE_ORDER'){
        return{
          ...state,
          placeOrder: action.payload
        }
      }
      return state
  };