import { useDispatch } from "react-redux";

import { logout } from "../store/actions/actionConnection";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4700/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      console.log("déconnecté");
      dispatch(logout());
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return <button onClick={handleLogout}>Deconnection</button>;
};

export default Logout;
