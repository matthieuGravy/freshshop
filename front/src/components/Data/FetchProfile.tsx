import React, { useEffect, useState } from "react";
import Heading from "../JSXML/Heading";

interface FetchProfileProps {
  render: (profile: any) => React.ReactNode;
  id: string;
  classNameUl: string;
  classNameLi: string;
  classNameSection: string;
  classNameSousSection: string;
  children?: React.ReactNode;
}

const FetchProfile: React.FC<FetchProfileProps> = ({
  id,
  children,
  classNameUl,
  classNameLi,
  classNameSection,
  classNameSousSection,
  classNameHeading,
}) => {
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

  return (
    <>
      <section className={classNameSection}>
        {children}
        {profile && (
          <>
            <ul className={classNameUl}>
              <li className={classNameLi}>genre : {profile.genre}</li>
              <li className={classNameLi}>firstname : {profile.firstname}</li>
              <li className={classNameLi}>lastname : {profile.lastname}</li>
              <section className={classNameSousSection}>
                <Heading
                  level="h3"
                  titre="Address"
                  className={classNameHeading}
                />
                <li className={classNameLi}>street : {profile.street}</li>
                <li className={classNameLi}>number : {profile.houseNumber}</li>
                <li className={classNameLi}>city : {profile.city}</li>
                <li className={classNameLi}>country : {profile.country}</li>
              </section>
            </ul>
            <ul>ajouter la les objets ici qui sera la col 2</ul>
          </>
        )}
      </section>
    </>
  );
};

export default FetchProfile;
