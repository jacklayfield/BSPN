export const Start = (userCreds) => ({
  type: "LOGIN_START",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const Success = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const Failure = () => ({
  type: "LOGIN_FAILURE",
});
