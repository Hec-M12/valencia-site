import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SedeHero from "@/components/sections/SedeHero";
import SedeDescription from "@/components/shared/SedeDescription";
import DivisionsComponent from "@/components/shared/DivisionsComponent";
import LocationComponent from "@/components/shared/LocationComponent";

export default function SedeSur() {
  return (
    <>
      <Navbar />
      <SedeHero
        heading={
          <>
            <span>Sede</span>
            <br />
            <span>Sur</span>
          </>
        }
        src={"/images/backgrounds/buhos-hero2.png"}
      />
      <SedeDescription
        title="Descripción General"
        description="La Sede Sur está ubicada en los Hidalgos y fue inaugurada en 2025. Es un campus moderno que ofrece la modalidad bilingüe con dos calendarios —Nacional (febrero a noviembre) y Anglosajón (agosto a junio), desde nursery hasta undécimo."
        items={[
          { label: "Modalidades", value: "Bilingüe" },
          {
            label: "Calendarios",
            value:
              "Nacional (Febrero - Noviembre) y Anglosajón (Agosto - Junio)",
          },
          { label: "Grados", value: "Nursery a Undécimo" },
          { label: "Idiomas", value: "Español, Inglés, Francés" },
        ]}
      />
      <DivisionsComponent />
      <LocationComponent
        lat={14.046581427334896}
        lng={-87.25486578763883}
        address="Res. Los Hidalgos, Comayagüela, Honduras"
        gMapsUrl="https://maps.app.goo.gl/pE4PzLHvuo4r2AS77"
        wazeUrl="https://www.waze.com/en/live-map/directions/hn/departamento-de-francisco-morazan/tgu/campus-valencia-school-hidalgos?place=ChIJybQXbwCXb48RJZ5GcU--5-U"
      />
      <Footer />
    </>
  );
}
