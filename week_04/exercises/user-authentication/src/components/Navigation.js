import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes/routes";

export default function Navigation() {
  return (
    <div className="content">
      <NavLink className="nav--item" to={ROUTES.home.path}>{ROUTES.home.title}</NavLink>
      <NavLink className="nav--item" to={ROUTES.login.path}>{ROUTES.login.title}</NavLink>
    </div>
  );
}
