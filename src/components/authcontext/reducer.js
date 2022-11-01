// reducer related to auth state;
function reducer(state, action) {
    switch (action.type) {
      case "GET_PRODUCTS_REQUEST":
        return { ...state, isLoading: true, isError: false };
  
      case "GET_PRODUCTS_FAILURE":
        return { ...state, isError: true, isLoading: false };
  
      case "GET_PRODUCTS_SUCCESS":
        return {
          ...state,
          isLoading: false,
          data: action.payLoad,
          isError: false,
        };
  
      case "LOGIN_SUCCESS":
        return { ...state, token: action.payLoad, isAuth: true };
  
      case "LOGIN_REQUEST":
        return state;
  
      case "LOGIN_FAILURE":
        return state;
      default:
        return state;
    }
  }
  
  export default reducer;