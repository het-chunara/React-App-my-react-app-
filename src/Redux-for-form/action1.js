export const SET_USER_DATA = "SET_USER_DATA";
export const SET_SELECTED_PLAN = "SET_SELECTED_PLAN";
export const SET_SELECTED_ADDONS = "SET_SELECTED_ADDONS";

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const setSelectedPlan = (selectedPlan) => ({
  type: SET_SELECTED_PLAN,
  payload: selectedPlan,
});

export const setSelectedAddons = (selectedAddons) => ({
  type: SET_SELECTED_ADDONS,
  payload: selectedAddons,
});

