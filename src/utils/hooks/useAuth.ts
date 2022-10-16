import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getUserData, selectUser } from "redux/slices/userSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [authDataLoading, setAuthDataLoading] = useState<boolean>(true);
  const { token } = useSelector(selectUser);

  useEffect(() => {
    setAuthDataLoading(true);
    getAuth().onAuthStateChanged((user) => {
      if (user?.email) {
        dispatch(getUserData(user.uid));
        setIsAuth(true);
      }
      setAuthDataLoading(false);
    });
  }, [token]);

  return { isAuth, authDataLoading };
};
