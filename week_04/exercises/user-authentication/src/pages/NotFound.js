import React from "react";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  return (
    <div>
      not found
      {error.status} - {error.statusText}
    </div>
  );
}
