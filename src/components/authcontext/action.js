// action creators related to auth state;
export function ProductRequest() {
    return { type: "GET_PRODUCTS_REQUEST" };
  }
  
  export function ProductSuccess(data) {
    return { type: "GET_PRODUCTS_SUCCESS", payLoad: data };
  }
  
  export function ProductFailure(data) {
    return { type: "GET_PRODUCTS_FAILURE" };
  }
  
  export function LoginSucess(data) {
    return { type: "LOGIN_SUCCESS", payLoad: data };
  }
  
  export function LoginRequest() {
    return { type: "LOGIN_REQUEST" };
  }
  
  export function LoginFailure() {
    return { type: "LOGIN_FAILURE" };
  }