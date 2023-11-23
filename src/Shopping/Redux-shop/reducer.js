const initialState = {
  cartarray: [],
};

const initialState2 = {
  userData: [],
  userRegistrations: [],
  // isUserLoggedIn: [],
  isUserLoggedIn: false,
};

export const cartReducer = (state = initialState, action) => {
  console.log("state", state);

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartarray: action.payload,
      };
    default:
      return state;
  }
};
// export const userReducer = (state = initialState2, action) => {
//   switch (action.type) {
//     case "REGISTER_USER":
//       return {
//         ...state,
//         userRegistrations: [...state.userRegistrations, action.payload],
//       };
//     case "LOGIN_USER":
//       return {
//         ...state,
//         userData: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const userReducer = (state = initialState2, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        userRegistrations: [...state.userRegistrations, action.payload],
        // isUserLoggedIn: true,

      };
    case "LOGIN_USER":
      const { email, password } = action.payload;
      const existingUser = state.userRegistrations.find(
        user => user.email === email && user.password === password
      );

      if (existingUser) {
        return {
          ...state,
          userData: existingUser,
          isUserLoggedIn: true,
        };
      } else {
        return state;
      }

    case "SIGN_OUT":
      return {
        ...state,
        userData: null,
        isUserLoggedIn: false,
        cartarray: [],
      };
    // case "CLEAR_CART_ON_SIGN_OUT":
    //   return {
    //     ...state,
    //     cartarray: [], // Reset cart on sign out
    //   };
    default:
      return state;
  }
};

