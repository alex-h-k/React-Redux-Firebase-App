const initState = {
  anthError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "login failed"
      };
    case "LOGIN_SUCESS":
      console.log("login sucess");
      return {
        ...state,
        anthError: null
      };
    default:
      return state;
  }
};

export default authReducer;
