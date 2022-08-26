import { Auth, UserCredential } from "@firebase/auth";
import { IPostUser, IUser } from "../types/user";
import { getUserData, postUserData, setUser } from "../redux/slices/userSlice";
import { firebaseErrorsHandler } from "./firebaseErrorsHandler";
import { Path } from "history";

export const authActionFactory = (
  actionFunc: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>,
  authData: IUser,
  auth: Auth,
  push: (location: Path) => void,
  dispatch: any,
  authType: "login" | "register",
  location?: Array<any>
) => {
  const { name = "" } = authData;

  return actionFunc(auth, authData.email, authData.password)
    .then((data: UserCredential) => {
      if (authType === "register") {
        const newUser: IPostUser = {
          id: data.user.uid,
          token: data.user.refreshToken,
          name: name,
          email: authData.email,
          age: null,
          gender: "",
          weight: null,
          height: null,
          location: location || [],
          placesHistory: [],
        };
        dispatch(postUserData(newUser));
        dispatch(setUser(newUser));
      } else {
        dispatch(getUserData(data.user.uid));
      }
      push("/main");
    })
    .catch((err) => {
      throw firebaseErrorsHandler(err.code);
    });
};
