import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import { Reveal, Split, Band } from "./components.jsx";
import { IMG, TEAM } from "./assets/images/index.js";

const FACTS = [
  ["Southeastern Bohol", "Philippines", "Location"],
  ["Under IPRA", "R.A. 8371, 1997", "Recognition"],
  ["Eskaya Script", "Indigenous syllabary", "Writing system"],
  ["Region VII", "Central Visayas", "Region"],
];

// Each card previews its own page with a photograph that belongs to that topic.
const EXPLORE = [
  { to: "/community", title: "The Community", img: IMG.elder, pos: "30% 30%", wide: true, text: "Profile, geographic location, demographic information, and the identity of the Eskaya people." },
  { to: "/history", title: "History and Heritage", img: IMG.customs, text: "Origin, customs, traditions, beliefs, arts, music, clothing, and cultural expressions." },
  { to: "/language", title: "Language and Knowledge", img: IMG.languageSign, text: "The Eskaya script, oral tradition, livelihood practices, and indigenous environmental knowledge." },
  { to: "/today", title: "The Community Today", img: IMG.reading, pos: "30% 40%", wide: true, text: "Contemporary life, education, cultural preservation efforts and challenges." },
  { to: "/digital", title: "Digital Heritage", img: IMG.manuscriptDetail, text: "Photo album, historical timeline, interactive map, and the Eskaya writing infographic." },
  { to: "/creators", title: "Meet the Creators", team: true, wide: true, text: "Meet the team behind this website, their roles, and their contributions to the project." },
];

function Home() {
  return (
    <>
      {/* The Chocolate Hills photograph is the background of this hero only. */}
      <header className="hero-photo" style={{ "--hero-img": `url(${IMG.homeHero.src})` }} role="img" aria-label={IMG.homeHero.alt}>
        <div className="wrap">
          <p className="kicker">Indigenous Heritage of Bohol · Philippines</p>
          <h1>The Eskaya People</h1>
          <p>
            Guardians of a living script and a deeply rooted culture, the Eskaya of southeastern Bohol carry one of the
            Philippines' most remarkable indigenous legacies — a people, a language, and a writing system unlike any other.
          </p>
          <div className="buttons">
            <Link className="btn primary" to="/community">Explore the Community</Link>
            <Link className="btn ghost" to="/history">Explore the History</Link>
          </div>
        </div>
      </header>

      <Band tone="cream">
        <Split img={IMG.tribu} ratio="3/2" pos="center 35%">
          <p className="kicker">Introduction</p>
          <h2>A Living Community with Deep Roots</h2>
          <p>
            The Eskaya are an indigenous cultural community residing in the mountainous interior of southeastern Bohol, in the
            Visayas region of the Philippines. Recognized under the Indigenous Peoples' Rights Act (Republic Act No. 8371, 1997),
            they are among the country's most studied indigenous groups — particularly for their unique indigenous script and
            oral traditions.
          </p>
          <p>
            Unlike many indigenous groups whose writing systems have been lost to colonial history, the Eskaya possess and
            actively use a writing system distinct from both the Latin alphabet and other Philippine scripts. This script, along
            with their oral traditions, myths, and community practices, continues to be transmitted across generations.
          </p>
          <p>
            This website presents documented and verifiable information about the Eskaya based on academic publications,
            government records, and cultural documentation, in the spirit of respectful and accurate heritage presentation.
          </p>
        </Split>
      </Band>

      <section className="band moss contour">
        <div className="wrap">
          <Reveal>
            <h2 className="on-dark">Summarization</h2>
            <dl className="facts-strip">
              {FACTS.map(([h, p, label]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd><strong>{h}</strong><span>{p}</span></dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="vista" style={{ "--vista-img": `url(${IMG.villageRoad.src})` }} role="img" aria-label={IMG.villageRoad.alt}>
        <div className="wrap">
          <Reveal className="vista-panel">
            <p className="kicker">The Homeland</p>
            <h2>Hills, Forest, and River Valleys</h2>
            <p>
              Bohol is an island province in the Central Visayas. The Eskaya live in the upland and interior barangays of its
              southeast, where rolling hills, tropical forest, and river valleys shape everyday life and traditional ecological
              knowledge.
            </p>
            <p><Link className="btn primary" to="/community">See where they live</Link></p>
          </Reveal>
        </div>
      </section>

      <Band tone="sand">
        <Reveal className="centered-intro">
          <p className="kicker">What You Will Find Here</p>
          <h2>Explore the Eskaya</h2>
        </Reveal>
        <div className="card-grid explore">
          {EXPLORE.map((c) => (
            <Reveal key={c.to} as={Link} to={c.to} className={`card link-card ${c.wide ? "wide" : ""}`}>
              {c.team ? (
                <div className="avatars" aria-hidden="true">
                  {[TEAM.lovelyn, TEAM.harvey, TEAM.jilliane, TEAM.amber, TEAM.ceejhay].map((a, i) => <img key={i} src={a} alt="" loading="lazy" />)}
                </div>
              ) : (
                <img className="thumb" src={c.img.src} alt="" loading="lazy" style={{ objectPosition: c.pos || "center" }} />
              )}
              <div className="card-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Band>
      <Footer />
    </>
  );
}

export default Home;
