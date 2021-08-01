import { useEffect } from "react";
import { auth } from "../config/firebase";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import Feed from "../components/Feed/Feed";
import Login from "../components/auth/Login";
import Widjet from "../components/Widjets/Widjet";

import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widjet />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
