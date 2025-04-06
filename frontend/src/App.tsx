import { FunctionComponent, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/sign-up/sign-up.page";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firestore.config";
import { UserContext } from "./converters/user.context";
import { log } from "console";

const App: FunctionComponent = () => {
  const { currentUser } = useContext(UserContext);

  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
