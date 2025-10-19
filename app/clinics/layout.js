import Footer from "../_components/Footer";
import Header from "../_components/Header";

function layout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}

export default layout;
