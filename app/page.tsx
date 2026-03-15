import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Nosotros  from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Sectores  from "./components/Sectores";
import Marcas    from "./components/Marcas";
import Clientes  from "./components/Clientes";
import Contacto  from "./components/Contacto";
import Footer    from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Sectores />
      <Marcas />
      <Clientes />
      <Contacto />
      <Footer />
    </>
  );
}
