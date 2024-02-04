import React, { useEffect, useState } from "react";
import Heading from "../JSXML/Heading";

interface ProfileField {
  name: string;
  getValue: (profile: any) => any;
}

interface FetchProfileProps {
  id: string;
  fields: ProfileField[];
  classNameUlName: string;
  classNameUlValue: string;
  classNameLi: string;
  classNameSection: string;
  classNameSectionUl: string;
  children?: React.ReactNode;
}

const FetchProfile: React.FC<FetchProfileProps> = ({
  id,
  fields,
  children,
  classNameUlName,
  classNameUlValue,
  classNameLi,
  classNameSectionUl,
  classNameSection,
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
    <section className={classNameSection}>
      {children}
      {profile && (
        <>
          <section className={classNameSectionUl}>
            <ul className={classNameUlName}>
              {fields.map((field) => (
                <li key={field.name} className={classNameLi}>
                  {field.name} :
                </li>
              ))}
            </ul>
            <ul className={classNameUlValue}>
              {fields.map((field) => (
                <li key={field.name} className={classNameLi}>
                  {field.getValue(profile)}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </section>
  );
};

export default FetchProfile;
