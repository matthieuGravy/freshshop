import { useState } from "react";
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
        method: "POST",
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

      const data = await response.json(); // Si vous attendez une réponse JSON du serveur
      console.log(data);
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        console.error("Server Error:", error.response.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <section className="w-full flex flex-col lg:flex-row justify-center gap-y-6 lg:gap-x-6 pb-6 ">
        <label htmlFor="firstname">firstname</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
          placeholder="firstname"
          id="firstname"
          name="firstname"
          type="text"
          value={firstname}
          onChange={handleChange}
        />
        {errors.firstname && <p>{errors.firstname}</p>}
        <label htmlFor="lastname">lastname</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
          placeholder="lastname"
          id="lastname"
          name="lastname"
          type="text"
          value={lastname}
          onChange={handleChange}
        />
        {errors.genre && <p>{errors.genre}</p>}

        <label htmlFor="genre">Gender :</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Sélectionnez un genre</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {errors.street && <p>{errors.street}</p>}
        <label htmlFor="street">street</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
          placeholder="street"
          id="street"
          name="street"
          type="text"
          value={street}
          onChange={handleChange}
        />

        {errors.houseNumber && <p>{errors.houseNumber}</p>}

        <label htmlFor="houseNumber">houseNumber</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
          placeholder="houseNumber"
          id="houseNumber"
          name="houseNumber"
          type="number"
          value={houseNumber}
          onChange={handleChange}
        />
        {errors.city && <p>{errors.city}</p>}
        <label htmlFor="city">city</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
          placeholder="city"
          id="city"
          name="city"
          type="text"
          value={city}
          onChange={handleChange}
        />

        {errors.country && <p>{errors.country}</p>}
        <label htmlFor="country">country</label>
        <input
          className="bg-transparent backdrop-blur-sm border-2 border-stone-500 rounded-full ps-5 p-2 placeholder:text-white"
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
          <ButtonSubmit text="Login" />
        </div>
      </section>
    </form>
  );
};

export default AccountForm;
