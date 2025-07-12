import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SedeHero from "@/components/sections/SedeHero";
import SedeDescription from "@/components/shared/SedeDescription";
import DivisionsComponent from "@/components/shared/DivisionsComponent";
import LocationComponent from "@/components/shared/LocationComponent";

export default function SedePrincipal() {
  return (
    <>
      <Navbar />
      <SedeHero
        heading={
          <>
            <span>Sede</span>
            <br />
            <span>Principal</span>
          </>
        }
        src={"/images/backgrounds/buhos-hero1.png"}
      />
      <SedeDescription
        title="Descripción General"
        description="La Sede Principal está ubicada en el Residencial Valencia y es nuestra sede fundacional. Ofrece modalidades bilingüe y español, con un calendario de febrero a noviembre, desde nursery hasta undécimo, e inclusión de francés en el plan de estudios."
        items={[
          { label: "Modalidades", value: "Bilingüe y Español" },
          { label: "Calendario", value: "Febrero - Noviembre" },
          { label: "Grados", value: "Nursery a Undécimo" },
          { label: "Idiomas", value: "Español, Inglés, Francés" },
        ]}
      />
      <DivisionsComponent />
      <LocationComponent
        lat={14.07176}
        lng={-87.17384}
        address="Residencial Valencia, Tegucigalpa, Honduras"
        gMapsUrl="https://maps.app.goo.gl/bfPf6J3TrwLz8vXEA"
        wazeUrl="https://ul.waze.com/ul?venue_id=178782349.1788020095.40101966&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
      />
      <Footer />
    </>
  );
}
