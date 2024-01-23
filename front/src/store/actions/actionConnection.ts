export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = LoginSuccessAction | LogoutAction;

export const loginSuccess = (user: User): UserActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): UserActionTypes => ({
  type: LOGOUT,
});
