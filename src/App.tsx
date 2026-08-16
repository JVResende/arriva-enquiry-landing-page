import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <EnquiryForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
