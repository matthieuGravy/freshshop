import React, { useEffect, useState } from "react";

interface FetchProfileProps {
  render: (profile: any) => React.ReactNode;
  id: string;
}

const FetchProfile: React.FC<FetchProfileProps> = ({ id, children }) => {
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
    const intervalId = setInterval(fetchProfileId, 5000); // Polling toutes les 5 secondes
    return () => clearInterval(intervalId); // Nettoyer sur le démontage
  }, [id]);

  return <>{profile && <span>{profile.firstname}</span>}</>;
};

export default FetchProfile;
