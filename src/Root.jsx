import React from "react";
import Navbar from "./components/header/Navbar";
import { Outlet } from "react-router-dom";
export const Root = ({ bgImage }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};
