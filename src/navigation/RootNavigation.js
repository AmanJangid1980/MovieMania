import React from "react";
import { useSelector } from "react-redux";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./BottomNavigation";

export const RootNavigation = () => {
  const { authData } = useSelector((state) => state.auth);

  console.log("authData_____________RootNavigation_______________>", authData);

  if (authData === 2) {
    return <AuthNavigation />;
  } else if (authData === 3) {
    return <MainNavigation initialRouteName="MyMovies" />;
  } else {
    return <AuthNavigation />;
  }
};

export default RootNavigation;
