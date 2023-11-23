

// import { actions} from './actions';
import actions from "./actions"

const initialState = {
    selectedSeats: [],
    posts: [],
    userData:[],
    userRegistrations: [],
    isUserLoggedIn: false,
  };


  
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_SELECTED_SEAT:
        return {
          ...state,
          selectedSeats: [
            ...state.selectedSeats,
            ...action.payload,
          ],
        };
  
      case actions.REMOVE_SELECTED_SEAT:
        return {
          ...state,
          selectedSeats: state.selectedSeats.filter((seat) => seat.seatId !== action.payload),
        };
        case actions.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

      case actions.REGISTER_USER:
        return {
          ...state,
          userRegistrations: [...state.userRegistrations, action.payload],
        };

        case actions.LOGIN_USER:
          const { email, password } = action.payload;
          const user = state.userRegistrations.find(
            (user) => user.email === email && user.password === password
          );
        
          const isLoginSuccessful = !!user; 
          console.log("isLoginSuccessful",user)
          const userData = isLoginSuccessful ? user : null;
          return {
            ...state,
            isUserLoggedIn: isLoginSuccessful,
            userData: userData ? userData : [],
          };

          case actions.SIGN_OUT_USER:
            return {
              ...state,
              isUserLoggedIn: false,
              userData: [], 
            };

            // case actions.SET_IMAGE:
            //   return {
            //     ...state,
            //     userData: {
            //       ...state.userData,
            //       profileImage: action.payload,
            //     },
            //   };
        

        default:
        return state;
    }
  };

  

  
  export default rootReducer;
  