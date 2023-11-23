export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const registerUser = (userData) => ({
    type: 'REGISTER_USER',
    payload: userData,
  });
  
  export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
  });
  
  export const SIGN_OUT = 'SIGN_OUT';

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

// export const fetchProducts = () => {
//   return (dispatch) => {
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({
//           type: "FETCH_PRODUCTS_SUCCESS",
//           payload: data.apiData, // assuming 'products' is the array in the API response
//         });
//       })
//       .catch((error) => {
//         // Handle error
//         console.error("Error fetching products:", error);
//       });
//   };
// }