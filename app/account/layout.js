import Header from "../_components/Header";

function layout({ children }) {
  return (
    <section className="bg-[#FAFAFA]">
      <Header />
      {children}
    </section>
  );
}

export default layout;
