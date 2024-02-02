import React, { useEffect, useState } from "react";

interface FetchProfileProps {
  id: string;
}

const FetchProfile: React.FC<FetchProfileProps> = ({ id }) => {
  const [profile, setProfile] = useState<any>(null);

  const fetchProfileId = async () => {
    try {
      const response = await fetch(`http://localhost:4700/profile/${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const user = await response.json();
        setProfile(user);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };

  useEffect(() => {
    fetchProfileId();
  }, [id]);

  return (
    <>
      <h1>Fetch Profile</h1>
      {profile && (
        <ul>
          <li>genre : {profile.genre}</li>
          <li>firstname : {profile.firstname}</li>
          <li>lastname : {profile.lastname}</li>
          <h3>Adresse</h3>
          <li>street : {profile.street}</li>
          <li>number : {profile.houseNumber}</li>
          <li>city : {profile.city}</li>
          <li>country : {profile.country}</li>
        </ul>
      )}
    </>
  );
};

export default FetchProfile;
