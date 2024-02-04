import Heading from "./JSXML/Heading";

const NotConnected = () => {
  return (
    <>
      <Heading
        level="h2"
        titre="Your are not connected. "
        className="text-center text-3xl pt-10 pb-6 xl:ps-48 px-10"
      />
      <p className="text-center text-xl">
        Please connect you or create an account.
      </p>
    </>
  );
};

export default NotConnected;
