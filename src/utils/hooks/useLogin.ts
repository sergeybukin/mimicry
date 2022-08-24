import { authActionFactory } from "../authActionFactory";
import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { IUser } from "../../types/user";
import { useHistory } from "react-router";
import { useAppDispatch } from "./useAppDispatch";

export const useLogin = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { push } = useHistory();

  const onLogin = (data: IUser) =>
    setPersistence(auth, browserSessionPersistence).then(() => {
      return authActionFactory(
        signInWithEmailAndPassword,
        data,
        auth,
        push,
        dispatch,
        "login"
      );
    });

  return { onLogin };
};
