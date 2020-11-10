import React from "react";
import NavBar from "./NavBar";
import SideNav from "./SideNav";
import "./style.css";

export default function Header() {
  return (
    <header>
      <NavBar />
      <SideNav />
    </header>
  );
}
