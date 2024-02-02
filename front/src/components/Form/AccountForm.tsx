import { useState, useEffect } from "react";
import { ButtonSubmit } from "../Buttons";

interface AccountFormProps {
  children?: React.ReactNode;
  id: string;
}

const AccountForm: React.FC<AccountFormProps> = ({ children, id }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    street: "",
    houseNumber: "",
    city: "",
    country: "",
    genre: "",
  });
  const [fetchProfileId, setFetchProfileId] = useState<any>(null);

  const userId = localStorage.getItem("userId"); // Récupérez l'ID de l'utilisateur du local storage
  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`http://localhost:4700/profile/${userId}`);
      const profile = await response.json();

      setFirstname(profile.firstname);
      setLastname(profile.lastname);
      setStreet(profile.street);
      setHouseNumber(profile.houseNumber);
      setCity(profile.city);
      setCountry(profile.country);
      setGenre(profile.genre);
    };

    fetchProfile();
  }, [userId]);

  useEffect(() => {}, [fetchProfileId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    switch (e.target.name) {
      case "firstname":
        setFirstname(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
      case "street":
        setStreet(e.target.value);
        break;
      case "houseNumber":
        setHouseNumber(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "country":
        setCountry(e.target.value);
        break;
      case "genre":
        setGenre(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validations
    let formErrors = {
      firstname: "",
      lastname: "",
      street: "",
      houseNumber: "",
      city: "",
      country: "",
      genre: "",
    };
    if (!firstname) formErrors.firstname = "Ce champ est requis";
    if (!lastname) formErrors.lastname = "Ce champ est requis";
    if (!street) formErrors.street = "Ce champ est requis";
    if (!houseNumber) formErrors.houseNumber = "Ce champ est requis";
    if (!country) formErrors.country = "Ce champ est requis";
    if (!genre) formErrors.genre = "Ce champ est requis";
    if (!city) formErrors.city = "Ce champ est requis";
    setErrors(formErrors);

    if (
      formErrors.firstname ||
      formErrors.lastname ||
      formErrors.street ||
      formErrors.houseNumber ||
      formErrors.country ||
      formErrors.genre ||
      formErrors.city
    )
      return;

    try {
      const response = await fetch(`http://localhost:4700/profile/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          street,
          houseNumber,
          country,
          genre,
          city,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const text = await response.text(); // Lire le corps en tant que texte
      if (text.length > 0) {
        const data = JSON.parse(text); // Parser le texte en tant que JSON
        console.log(data);
      } else {
        console.error(`Error: Empty response body`);
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };
  let styleSelect =
    "w-64 bg-orange-300  border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white";
  let textButton = "Confirm";
  let sectionStyle =
    "pt-14 rounded-xl px-8 m-auto max-w-xl bg-orange-300 grid grid-cols-2 lg:flex-row justify-center gap-y-6 lg:gap-x-6 pb-6 max-width";

  let inputStyle =
    "w-64 bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white";
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {children}
      <section className={sectionStyle}>
        <label htmlFor="firstname">Firstname:</label>
        <input
          className={inputStyle}
          placeholder="firstname"
          id="firstname"
          name="firstname"
          type="text"
          value={firstname}
          onChange={handleChange}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <label htmlFor="lastname">Lastname:</label>
        <input
          className={inputStyle}
          placeholder="lastname"
          id="lastname"
          name="lastname"
          type="text"
          value={lastname}
          onChange={handleChange}
        />
        {errors.genre && <p>{errors.genre}</p>}

        <label htmlFor="genre">Gender:</label>
        <select
          value={genre}
          className={styleSelect}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">--Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {errors.street && <p>{errors.street}</p>}
        <label htmlFor="street">Street:</label>
        <input
          className={inputStyle}
          placeholder="street"
          id="street"
          name="street"
          type="text"
          value={street}
          onChange={handleChange}
        />

        {errors.houseNumber && <p>{errors.houseNumber}</p>}

        <label htmlFor="houseNumber">House number:</label>
        <input
          className={inputStyle}
          placeholder="houseNumber"
          id="houseNumber"
          name="houseNumber"
          type="number"
          value={houseNumber}
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}
        <label htmlFor="city">City:</label>
        <input
          className={inputStyle}
          placeholder="city"
          id="city"
          name="city"
          type="text"
          value={city}
          onChange={handleChange}
        />

        {errors.country && <p>{errors.country}</p>}
        <label htmlFor="country">Country:</label>
        <input
          className={inputStyle}
          placeholder="country"
          id="country"
          name="country"
          type="text"
          value={country}
          onChange={handleChange}
        />

        <div>
          {(errors.firstname ||
            errors.lastname ||
            errors.street ||
            errors.houseNumber ||
            errors.country ||
            errors.genre ||
            errors.city) && (
            <div>
              Des erreurs sont présentes dans le formulaire :
              {errors.firstname && <div>Firstname: {errors.firstname}</div>}
              {errors.lastname && <div>Lastname: {errors.lastname}</div>}
              {errors.street && <div>Street: {errors.street}</div>}
              {errors.houseNumber && (
                <div>House Number: {errors.houseNumber}</div>
              )}
              {errors.country && <div>Country: {errors.country}</div>}
              {errors.genre && <div>Genre: {errors.genre}</div>}
              {errors.city && <div>City: {errors.city}</div>}
            </div>
          )}
          <ButtonSubmit text={textButton} />
        </div>
      </section>
    </form>
  );
};

export default AccountForm;
