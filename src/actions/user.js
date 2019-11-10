import { SIGN_IN } from "./types";

export const signIn = (user, token) => {
  return {
    type: SIGN_IN,
    payload: {
      user,
      token
    }
  };
};
