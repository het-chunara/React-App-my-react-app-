
const actions = {
  SET_POSTS: 'SET_POSTS',
  REMOVE_SELECTED_SEAT: 'REMOVE_SELECTED_SEAT',
  ADD_SELECTED_SEAT: 'ADD_SELECTED_SEAT',
  REGISTER_USER : 'REGISTER_USER',
  LOGIN_USER : 'LOGIN_USER',
  SIGN_OUT_USER : 'SIGN_OUT_USER',
  // SET_IMAGE : 'SET_IMAGE',

  setPosts: (posts) => ({
    type: actions.SET_POSTS,
    payload: posts,
  }),

  removeSelectedSeat: (seatId) => ({
    type: actions.REMOVE_SELECTED_SEAT,
    payload: seatId,
  }),

  addSelectedSeat: (selectedSeat) => ({
    type: actions.ADD_SELECTED_SEAT,
    payload: selectedSeat,
  }),

  registerUser: (userData) => ({
    type: actions.REGISTER_USER,
    payload: userData,
  }),

  loginUser : (userData) => ({
    type: actions.LOGIN_USER,
    payload: userData,
  }),

  signOutUser : (userData) => ({
    type: actions.SIGN_OUT_USER,
    payload: userData,
  }),

  // setImage : (base64Image) => ({
  //   type: actions.SET_IMAGE,
  //   payload: base64Image,
  // }),


  
};

export default actions;

// export const addSelectedSeat = (selectedSeat) => {
//   // console.log('dkfjsdkjfbsdkjf', selectedSeat)
//   return {
//     type: 'ADD_SELECTED_SEAT',
//     payload: selectedSeat,
//   };
// };

// export const removeSelectedSeat = (seatId) => {
//   return {
//     type: 'REMOVE_SELECTED_SEAT',
//     payload: seatId,
//   };
// };

// export const SET_POSTS = 'SET_POSTS';


// export const setPosts = (posts) => {
//   return {
//     type: 'SET_POSTS',
//     payload: posts,
//   };
// };