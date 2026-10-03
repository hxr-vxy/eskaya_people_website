import Footer from "./Footer.jsx";

import { TEAM } from "./assets/images/index.js";
import { Reveal, Band } from "./components.jsx";

const { lovelyn, harvey, jilliane, amber, jelyn, kervee, jarl, francis, ceejhay } = TEAM;

const LEADER = { name: "Lovelyn Pojas", role: "Group Leader", img: lovelyn };
const DEV = { name: "Harvey Quibol III", role: "Developer", img: harvey };
const RESEARCHERS = [
  { name: "Jilliane Aguanza", img: jilliane },
  { name: "Amber Perote", img: amber },
  { name: "Jelyn Betco", img: jelyn },
  { name: "Kervee Cosinero", img: kervee },
  { name: "Cee Jhay", img: ceejhay },
].map((r) => ({ ...r, role: "Researcher" }));

const WEB_TESTERS = [
  { name: "Jarl Sabillano", img: jarl },
  { name: "Francis Oldenaria", img: francis },
].map((r) => ({ ...r, role: "Web Tester" }));

const EVERYONE = [LEADER, DEV, ...RESEARCHERS, ...WEB_TESTERS];


function Person({ p }) {
  const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <figure className="person" tabIndex={0} data-name={p.name}>
      <div className="avatar">
        {p.img ? <img src={p.img} alt={p.name} loading="lazy" /> : <span className="initials" aria-hidden="true">{initials}</span>}
        <figcaption><strong>{p.name}</strong><span>{p.role}</span></figcaption>
      </div>
      <div className="label"><strong>{p.name}</strong><span>{p.role}</span></div>
    </figure>
  );
}

function Creators() {
  return (
    <>
      <header className="cr-hero">
        <div className="wrap">
          <div>
            <p className="kicker">Meet the Creators</p>
            <h1>The Team Behind This Website</h1>
            <p className="lead">The people who researched, designed, and built this project.</p>
          </div>
          <div className="faces" aria-hidden="true">
            {EVERYONE.map((p) => <img key={p.name} src={p.img} alt="" loading="lazy" />)}
          </div>
        </div>
      </header>

      <Band tone="org-band">
        <section aria-label="Org tree" className="org">
          <Reveal><h2>Eskaya Website Builder</h2></Reveal>
          <div className="tree">
            <div className="node"><Person p={LEADER} /></div>
            <div className="stem" />
            <div className="node"><Person p={DEV} /></div>
            <div className="stem" />
            <div className="researchers">
              {[...RESEARCHERS, ...WEB_TESTERS].map((r) => (
                <div className="node" key={r.name}>
                  <Person p={r} />
                </div>
              ))}
            </div>

          </div>
        </section>
      </Band>
      <Footer />
    </>
  );
}

export default Creators;
