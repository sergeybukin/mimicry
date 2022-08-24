import { authActionFactory } from "../authActionFactory";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { IUser } from "../../types/user";
import { useAppDispatch } from "./useAppDispatch";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";

export const useRegister = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { location } = useSelector(selectUser);

  const onRegister = (data: IUser) =>
    authActionFactory(
      createUserWithEmailAndPassword,
      data,
      auth,
      push,
      dispatch,
      "register",
      location
    );
  return { onRegister };
};
