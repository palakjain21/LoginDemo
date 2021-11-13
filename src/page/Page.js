import React from "react";
import "./Page.css";

const Page = () => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Role");
    localStorage.removeItem("First_name");
    localStorage.removeItem("Middle_name");
    localStorage.removeItem("Last_name");
    localStorage.removeItem("Mobile_no");
    localStorage.removeItem("Whatsapp_no");
    localStorage.removeItem("User_id");
    window.location.reload();
  };
  return (
    <div>
      <p className="para">You are logged in!</p>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Page;
