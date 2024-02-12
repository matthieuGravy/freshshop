import { Outlet } from "react-router-dom";

const Shoppage = () => {
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-4 grid-rows-auto gap-x-8 pt-12 ">
        <section className="col-start-4 row-start-1 bg-blue-200 px-6">
          <article className="bg-blue-300">whishlist</article>
          <article>Panier</article>
        </section>
        <section className="col-span-3">
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default Shoppage;
