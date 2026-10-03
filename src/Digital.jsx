import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer.jsx";

import { IMG } from "./assets/images/index.js";
import { Reveal, Photo, Band } from "./components.jsx";

/**
 * The album gathers photographs from every part of the site (Home, Community, History, Language, Digital).
 * Each photograph appears once. `s` is the grid size: (none) = 1x1, w = wide, t = tall, b = big.
 * Titles describe what the photograph shows; photographer credits are not yet confirmed.
 */
const PHOTOS = [
  { img: IMG.hillsSunrise, s: "t", pos: "center 60%", cat: "Landscape", title: "Hills at Sunrise", place: "Bohol, Philippines", desc: "Early light over the hills of Bohol." },
  { img: IMG.homeHero, s: "w", pos: "center 60%", cat: "Landscape", title: "Chocolate Hills", place: "Bohol, Philippines", desc: "The best-known landscape of Bohol's interior." },
  { img: IMG.elder, pos: "30% 30%", cat: "People", title: "Community Elder", place: "Southeastern Bohol", desc: "A community elder from the uplands." },
  { img: IMG.reading, pos: "25% 40%", cat: "Language", title: "Reading Together", place: "Southeastern Bohol", desc: "A community member reading from a handwritten book." },
  { img: IMG.communityGroup, s: "w", pos: "center 40%", cat: "Community", title: "Community Gathering", place: "Southeastern Bohol", desc: "Community members gathered in front of a wooden building." },
  { img: IMG.tribu, s: "b", pos: "center 35%", cat: "People", title: "Eskaya Men", place: "Southeastern Bohol", desc: "Community men standing together." },
  { img: IMG.hillsOverview, cat: "Landscape", title: "Rolling Hills", place: "Bohol, Philippines", desc: "Grass-covered hills in the island interior." },
  { img: IMG.villageRoad, pos: "55% center", cat: "Landscape", title: "Upland Village Road", place: "Southeastern Bohol", desc: "A road through an upland village." },
  { img: IMG.writingBook, s: "w", cat: "Eskaya Script", title: "Handwritten Book", place: "Eskaya script", desc: "An old book written in the Eskaya script." },
  { img: IMG.manuscript, s: "w", cat: "Eskaya Script", title: "Manuscript Page", place: "Eskaya script", desc: "A handwritten page in the Eskaya script." },
  { img: IMG.languageSign, pos: "center 30%", cat: "Language", title: "Script on a Board", place: "Southeastern Bohol", desc: "A hand-painted board written in the Eskaya script." },
  { img: IMG.origin, pos: "center 40%", cat: "Community", title: "Community Portrait", place: "Southeastern Bohol", desc: "Community members posing together outdoors." },
  { img: IMG.gathering, s: "w", cat: "Community", title: "Seated Gathering", place: "Southeastern Bohol", desc: "Community members seated together." },
  { img: IMG.livelihood, cat: "Livelihood", title: "Upland Farming", place: "Southeastern Bohol", desc: "Tending vegetable plots." },
  { img: IMG.weaving, pos: "center 30%", cat: "Craft", title: "Handwoven Textile", place: "Southeastern Bohol", desc: "A woven textile held up for the camera." },
  { img: IMG.arts, s: "t", cat: "Arts", title: "Painted Chart", place: "Southeastern Bohol", desc: "A painted chart of figures in traditional dress." },
  { img: IMG.craft, s: "t", cat: "Craft", title: "Carved Wood", place: "Southeastern Bohol", desc: "A carved wooden object." },
  { img: IMG.dance, s: "w", pos: "center 35%", cat: "Performance", title: "Dance Performance", place: "Bohol, Philippines", desc: "Dancers at a community event." },
  { img: IMG.dancing, cat: "Performance", title: "Stage Dance", place: "Bohol, Philippines", desc: "Dancers in green costumes on an outdoor stage." },
  { img: IMG.customs, cat: "Tradition", title: "Woven Clothing", place: "Southeastern Bohol", desc: "Women in traditional woven clothing." },
  { img: IMG.tinikling, s: "t", pos: "center 30%", cat: "Philippine culture", title: "Tinikling", place: "Philippines", desc: "A Philippine folk dance, not specific to the Eskaya." },
  { img: IMG.folkDance, s: "t", pos: "center 20%", cat: "Philippine culture", title: "Folk Dance", place: "Philippines", desc: "Traditional dress and dance, not specific to the Eskaya." },
  { img: IMG.foodTaro, cat: "Food", title: "Taro", place: "Bohol, Philippines", desc: "A root crop." },
  { img: IMG.foodBodbod, cat: "Food", title: "Bodbod", place: "Bohol, Philippines", desc: "A rice cake wrapped in banana leaf." },
  { img: IMG.foodLatik, cat: "Food", title: "Latik", place: "Bohol, Philippines", desc: "A caramelised coconut sweet." },
  { img: IMG.foodSuso, cat: "Food", title: "Sinunobang Suso", place: "Bohol, Philippines", desc: "Shellfish cooked in coconut milk." },
];

// Approximate municipal centres only: no barangay or private-site detail.
const PLACES = [
  { name: "Pilar", pos: [9.81, 124.34], note: "A principal centre of Eskaya cultural life" },
  { name: "Guindulman", pos: [9.75, 124.48], note: "Home to several Eskaya barangays" },
  { name: "Duero", pos: [9.72, 124.4], note: "Southeastern coastal and inland areas" },
  { name: "Garcia Hernandez", pos: [9.61, 124.3], note: "Upland Eskaya communities" },
];

const TIMELINE = [
  { when: "Pre-16th Century", title: "Pre-Colonial Period", text: "The ancestors of the Eskaya inhabit the interior highlands of Bohol as part of the indigenous population of the Visayas. They develop distinct cultural practices, oral traditions, and a writing system." },
  { when: "1565", title: "Spanish Colonization Begins", text: "Spanish colonization of the Philippines begins under Miguel López de Legazpi, initially based in Cebu. The reducción policy attempts to resettle indigenous inland communities into coastal and lowland towns." },
  { when: "16th–19th Century", title: "Interior Retreat", text: "Many interior communities in Bohol, including ancestors of the Eskaya, maintain their way of life in the mountains, away from direct colonial administration and Christian mission settlements." },
  { when: "1898", title: "End of Spanish Colonial Rule", text: "Spain cedes the Philippines to the United States following the Spanish-American War. The Philippine-American War follows, with significant impact on indigenous communities across the archipelago." },
  { when: "20th Century", title: "Documentation of the Eskaya Script", text: "Researchers and government officials begin documenting the Eskaya community and its unique writing system. The community maintains its script and language through this period." },
  { when: "1987", title: "Philippine Constitution", text: "The 1987 Philippine Constitution recognizes the rights of indigenous cultural communities to preserve their culture, traditions, and institutions, providing a foundation for later indigenous rights legislation." },
  { when: "1997", title: "IPRA, Republic Act No. 8371", text: "The Indigenous Peoples' Rights Act is signed into law. It recognizes the rights of indigenous cultural communities to ancestral domain, self-governance, and cultural integrity and establishes the National Commission on Indigenous Peoples (NCIP)." },
  { when: "2011", title: "IPEd Framework", text: "The Department of Education issues Order No. 62, s. 2011, establishing the Indigenous Peoples' Education (IPEd) program to integrate indigenous knowledge and culture into formal schooling." },
  // The earlier brief said "2020 – Unicode 13.0: Eskaya Script Encoded". Unicode 13.0 (2020) added Dives Akuru,
  // not Eskaya, so this entry stays neutral until the encoding claim is verified.
  { when: "2020", title: "Digital Documentation of the Script", text: "Fonts, digital archives, and encoding proposals are part of ongoing efforts to represent the Eskaya script digitally, supporting its documentation and preservation." },
  { when: "Present", title: "Living Community", text: "The Eskaya continue as a living community in southeastern Bohol, navigating contemporary challenges while working to preserve their language, script, and cultural heritage for future generations." },
];

const FACTS = [
  { k: "What it is", v: "A syllabary: each character stands for a syllable, not a single consonant or vowel." },
  { k: "Distinct from Baybayin", v: "Visually and structurally different from Baybayin and other known Philippine scripts." },
  { k: "Size", v: "About 71–75 characters documented in academic sources." },
  { k: "Direction", v: "Written left to right." },
];

const STEPS = [
  { h: "Identity", p: "Those who read, write, and speak Eskaya are considered fully Eskaya in the cultural sense." },
  { h: "Oral + written", p: "The script records oral texts so they can be passed on and consulted." },
  { h: "Documentation", p: "Linguists and anthropologists, including Jason William Lobel, have published research on the language and script." },
  { h: "Digital recognition", p: "Digital representation of the script is part of its wider preservation effort." },
];

function TerritoryMap() {
  const el = useRef(null);
  useEffect(() => {
    const map = L.map(el.current, { scrollWheelZoom: false }).setView([9.85, 124.15], 9);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 13,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.circle([9.72, 124.4], { radius: 14000, color: "#7b5330", weight: 2, fillColor: "#b9a15a", fillOpacity: 0.18 })
      .addTo(map).bindTooltip("General area of Eskaya communities", { sticky: true });
    PLACES.forEach((p) =>
      L.circleMarker(p.pos, { radius: 7, color: "#17291f", weight: 2, fillColor: "#e6d9a6", fillOpacity: 1 })
        .addTo(map).bindPopup(`<strong>${p.name}</strong><br/>${p.note}`)
        .bindTooltip(p.name, { permanent: true, direction: "right", offset: [8, 0], className: "map-label" }));
    L.marker([9.65, 123.85], { opacity: 0 }).addTo(map)
      .bindTooltip("BOHOL", { permanent: true, direction: "center", className: "map-label map-island" });
    return () => map.remove();
  }, []);
  return <div ref={el} className="territory-map" role="region" aria-label="Map of southeastern Bohol" />;
}

function Album() {
  // Touch screens have no hover, so a tap (or Enter/Space) toggles the details of one photograph.
  const [shown, setShown] = useState(-1);
  const toggle = (i) => setShown((cur) => (cur === i ? -1 : i));
  return (
    <div className="album">
      {PHOTOS.map((ph, i) => (
        <figure
          key={ph.title}
          className={`al ${ph.s || ""} ${shown === i ? "show" : ""}`}
          tabIndex={0}
          onClick={() => toggle(i)}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); } }}
        >
          <img src={ph.img.src} alt={`${ph.title}, ${ph.place}. ${ph.desc}`} loading="lazy" style={{ objectPosition: ph.pos || "center" }} />
          <figcaption>
            <span className="cat">{ph.cat}</span>
            <strong>{ph.title}</strong>
            <span className="pl">{ph.place}</span>
            <em>{ph.desc}</em>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Digital() {
  // A Set of open entries, so every timeline event opens and closes on its own.
  const [open, setOpen] = useState(() => new Set([0]));
  const toggle = (i) => setOpen((cur) => {
    const next = new Set(cur);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  return (
    <>
      <header className="dg-hero">
        <div className="wrap">
          <div>
            <p className="kicker">Digital Heritage</p>
            <h1>A Visual Archive of Eskaya Heritage</h1>
            <p className="lead">
              An exhibition of photographs, a map of the homeland, the Eskaya writing system, and a timeline of the
              history that shaped the community.
            </p>
            <div className="dg-stats">
              <div><b>{PHOTOS.length}</b><span>photographs</span></div>
              <div><b>1</b><span>interactive map</span></div>
              <div><b>{TIMELINE.length}</b><span>timeline events</span></div>
            </div>
          </div>
          <figure className="dg-frame">
            <img src={IMG.manuscriptDetail.src} alt={IMG.manuscriptDetail.alt} />
            <figcaption>{IMG.manuscriptDetail.caption} Digitizing pages like this helps keep the script available to future readers.</figcaption>
          </figure>
        </div>
      </header>

      <Band tone="night">
        <Reveal>
          <p className="kicker">Photo Album</p>
          <h2>The Eskaya and Bohol in Pictures</h2>
          <p className="d-lead">Photographs from across this website, gathered in one place. Hover over, or tap, a photograph for its title and place.</p>
        </Reveal>
        <Album />
      </Band>

      <Band tone="sand">
        <Reveal>
          <h2>Interactive Map: Eskaya Territory</h2>
          <p className="d-lead">Southeastern Bohol. Markers show municipal centres only; the shaded circle is a general area, not a boundary.</p>
        </Reveal>
        <div className="map-grid">
          <TerritoryMap />
          <Photo img={IMG.languageMap} ratio="1/2" fit="contain" className="dark" />
        </div>
        <p className="map-note">Locations are approximate. Barangay-level and private sites are intentionally not shown.</p>
      </Band>

      <Band tone="cream">
        <Reveal>
          <h2>The Eskaya Writing System</h2>
          <p className="d-lead">An indigenous script that carries language and identity.</p>
        </Reveal>
        <Reveal className="script-board">
          <Photo img={IMG.scriptChart} ratio="571/839" fit="contain" />
          <div className="stack">
            <div className="card-grid two compact">
              {FACTS.map((f) => (<div key={f.k} className="card pad accent"><h3>{f.k}</h3><p>{f.v}</p></div>))}
            </div>
            <Photo img={IMG.scriptSample} ratio="520/286" fit="contain" />
          </div>
        </Reveal>
        <Reveal as="ol" className="flow">
          {STEPS.map((s, i) => (<li key={s.h}><span>{i + 1}</span><h4>{s.h}</h4><p>{s.p}</p></li>))}
        </Reveal>
      </Band>

      <Band tone="sand">
        <Reveal>
          <h2>Digital Timeline: Eskaya History</h2>
          <p className="d-lead">Select an entry to read more. Select it again to close it.</p>
        </Reveal>
        <ol className="timeline">
          {TIMELINE.map((t, i) => {
            const isOpen = open.has(i);
            return (
              <Reveal as="li" key={t.when} className={isOpen ? "on" : ""} data-testid={`tl-${i}`}>
                <button type="button" onClick={() => toggle(i)} aria-expanded={isOpen} aria-controls={`tl-panel-${i}`}>
                  <span className="when">{t.when}</span>
                  <span className="what">{t.title}</span>
                </button>
                {isOpen && <p className="t-body" id={`tl-panel-${i}`}>{t.text}</p>}
              </Reveal>
            );
          })}
        </ol>
      </Band>
      <Footer />
    </>
  );
}

export default Digital;
