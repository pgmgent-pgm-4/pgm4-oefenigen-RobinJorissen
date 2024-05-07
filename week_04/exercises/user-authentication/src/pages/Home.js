import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h2>Welkom {user}!</h2>
      <p>Je bent succesvol ingelogd.</p>
    </div>
  );
}
