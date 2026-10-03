import Footer from "./Footer.jsx";
import { Reveal, Split, Photo, Band } from "./components.jsx";
import { IMG } from "./assets/images/index.js";

const PLACES = [
  ["Pilar", "A principal center of Eskaya cultural life"],
  ["Guindulman", "Home to several Eskaya barangays"],
  ["Garcia Hernandez", "Known for upland Eskaya communities"],
  ["Duero", "Southeastern coastal and inland areas"],
];

function Community() {
  return (
    <>
      <header className="cm-hero">
        <div className="cm-hero-text">
          <p className="kicker">The Community</p>
          <h1>Profile &amp; Identity of the Eskaya</h1>
          <p className="lead">
            The Eskaya are an indigenous cultural community of southeastern Bohol, recognized by the Philippine government and
            known for their distinct identity, language, and cultural practices.
          </p>
        </div>
        <div className="cm-hero-img">
          <img src={IMG.communityGroup.src} alt={IMG.communityGroup.alt} />
          <div className="info-panel"><strong>WHERE</strong>Pilar · Guindulman · Garcia Hernandez · Duero, southeastern Bohol</div>
        </div>
      </header>

      <Band tone="cream">
        <Split img={IMG.origin} ratio="3/2" pos="center 40%">
          <h2>Who Are the Eskaya?</h2>
          <p>
            The Eskaya (also spelled Escaya, Iskaya) are an indigenous cultural community (ICC) in the Philippines. They inhabit
            the mountainous and upland areas of southeastern Bohol, primarily in the municipalities of Pilar, Guindulman, Garcia
            Hernandez, and Duero. They are classified as one of the indigenous peoples of the Visayas region.
          </p>
          <p>
            The Eskaya are officially recognized as an indigenous cultural community by the National Commission on Indigenous
            Peoples (NCIP) under the Indigenous Peoples' Rights Act of 1997 (Republic Act No. 8371). This recognition grants them
            rights to their ancestral domain, self-governance, and cultural integrity.
          </p>
        </Split>
        <div className="card-grid two tight-top">
          <Reveal className="card pad accent">
            <h3>A distinct writing system</h3>
            <p>
              What distinguishes the Eskaya most notably from neighboring communities is their possession of an indigenous writing
              system — a syllabary distinct from the pre-colonial Baybayin script used elsewhere in the Philippines — as well as a
              corpus of oral literature, traditional laws, and cosmological beliefs that have been documented by researchers from
              both the Philippines and abroad.
            </p>
          </Reveal>
          <Reveal className="card pad accent">
            <h3>Identity tied to language</h3>
            <p>
              Scholars have noted that Eskaya identity is closely tied to their language and script. Community members who can
              read, write, and speak the Eskaya language and use the Eskaya script are considered fully Eskaya in the cultural
              sense. This linguistic-cultural identity marker sets them apart from their lowland Visayan neighbors.
            </p>
          </Reveal>
        </div>
      </Band>

      <Band tone="sand">
        <Reveal className="geo-grid">
          <div>
            <h2>Geographic Location</h2>
            <p>
              Bohol is an island province in the Central Visayas region (Region VII) of the Philippines. The Eskaya occupy the
              southeastern portion of the island, in upland and interior barangays of several municipalities.
            </p>
            <p>
              The terrain is characterized by rolling hills, tropical forest, and river valleys. The landscape provides the
              environmental context for much of the Eskaya's traditional ecological knowledge and livelihood practices.
            </p>
            <p>The primary municipalities with documented Eskaya communities include:</p>
            <div className="card-grid places" style={{ gridTemplateColumns: "repeat(2,minmax(0,1fr))" }}>
              {PLACES.map(([name, note]) => (
                <div key={name} className="card pad place">
                  <h3>{name}</h3>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="geo-stack">
            <figure className="map-frame">
              <img src={IMG.locationMap.src} alt={IMG.locationMap.alt} loading="lazy" />
              <figcaption>{IMG.locationMap.caption}</figcaption>
            </figure>
            <Photo img={IMG.hillsOverview} ratio="16/9" />
          </div>
        </Reveal>
      </Band>

      <Band tone="cream">
        <Reveal>
          <h2>Demographic Information</h2>
        </Reveal>
        <div className="portrait-row">
          <Reveal className="demo-side">
            <Photo img={IMG.elder} ratio="4/5" pos="30% 30%" />
            <div className="callout" style={{ marginTop: "1.2rem" }}>
              <p>
                <strong>Note on Demographic Data:</strong> Precise and current population statistics for the Eskaya are not
                consistently available in publicly accessible government databases as of the most recent census reports. Figures
                cited in various academic sources vary significantly, reflecting different methodologies and definitions of
                community membership. This section presents only documented estimates from verifiable sources.
              </p>
            </div>
          </Reveal>
          <Reveal className="prose">
            <p>
              Academic literature on the Eskaya, including research published in linguistic and anthropological journals,
              indicates that the Eskaya are a relatively small indigenous community. Some published studies have estimated
              community size in the hundreds to a few thousand individuals, depending on whether the count includes those who
              identify culturally as Eskaya versus fluent language speakers.
            </p>
            <p>
              The National Commission on Indigenous Peoples (NCIP) maintains records on indigenous communities throughout the
              Philippines, including communities in Bohol. Readers seeking current population data are directed to the NCIP's
              official census records and the Philippine Statistics Authority (PSA) data for Bohol province.
            </p>
            <p>
              The community is concentrated in upland barangays. Many Eskaya individuals are bilingual or multilingual, also
              speaking Cebuano (Bisaya) as the regional lingua franca and, in some cases, Filipino and English.
            </p>
          </Reveal>
        </div>
      </Band>
      <Footer />
    </>
  );
}

export default Community;
