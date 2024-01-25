const ButtonSubmit = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-stone-500 border-2 border-stone-500 rounded-full p-3 w-28 text-white hover:bg-stone-600 hover:border-stone-600 transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
};

export { ButtonSubmit };
