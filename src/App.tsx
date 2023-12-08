import { Navbar } from "./components/navbar/navbar.components";

export const App = () => {
  return (
    <>
      <section className="bg-black">
        <Navbar redesItems={[]} data={[]} />
      </section>
      <section className="bg-gray-500 h-[500px]">sessão 1</section>
      <section className="bg-gray-700 h-[500px]">sessão 2</section>
    </>
  );
};
