import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setUser({ username });
    } else {
      setError("Onjuiste gebruikersnaam of wachtwoord");
    }
  };

  return (
    <div>
      <h2>Aanmelden</h2>
      <input
        type="text"
        placeholder="Gebruikersnaam"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Wachtwoord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Aanmelden</button>
      {error && <p>{error}</p>}
    </div>
  );
}
