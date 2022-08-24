import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { useAppDispatch } from "./useAppDispatch";
import { removeUser } from "../../redux/slices/userSlice";

export const useLogOut = () => {
  const auth = getAuth();
  const { push, go } = useHistory();
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        push("/auth/login");
        go(0);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return { onLogOut };
};
