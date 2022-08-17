import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { firebaseErrorsHandler } from "../firebaseErrorsHandler";
import { User } from "../../types/user";
import { AuthEnum } from "../../types/auth";

export const useAuth = () => {
  const auth = getAuth();
  const authAction = (authData: User, authType: AuthEnum) => {
    if (authType === AuthEnum.LOG_IN) {
      setPersistence(auth, browserSessionPersistence).then(() => {
        return signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        )
          .then(({ user }) => {
            console.log("success");
          })
          .catch((error) => {
            return firebaseErrorsHandler(error.code);
          });
      });
    }
    if (authType === AuthEnum.CREATE_ACCOUNT) {
      return createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
      )
        .then(({ user }) => {
          console.log("success");
        })
        .catch((error) => {
          return firebaseErrorsHandler(error.code);
        });
    }
  };
  return { authAction: authAction };
};
