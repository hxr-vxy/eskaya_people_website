import Footer from "./Footer.jsx";
import { Reveal, Split, Band } from "./components.jsx";
import { IMG } from "./assets/images/index.js";

const DATES = [
  ["1565", "Spanish colonization of the Philippines begins."],
  ["1898", "Spanish rule ends; the Philippines passes to the United States."],
  ["1987", "The Constitution recognizes indigenous cultural communities."],
  ["1997", "IPRA (R.A. 8371) is signed into law."],
];

const FOODS = [
  [IMG.foodTaro, "Taro"],
  [IMG.foodBodbod, "Bodbod"],
  [IMG.foodLatik, "Latik"],
  [IMG.foodSuso, "Sinunobang suso"],
];

function History() {
  return (
    <>
      <header className="hs-hero">
        <div className="wrap">
          <p className="kicker">History &amp; Cultural Heritage</p>
          <h1>Origins, Traditions, and Living Culture</h1>
          <p className="lead">
            The Eskaya possess a rich historical identity rooted in their ancestral homeland of Bohol, expressed through their
            traditions, beliefs, arts, and daily practices.
          </p>
          <div className="hs-strip">
            {[[IMG.tribalHouse, "center"], [IMG.customs, "center 40%"], [IMG.hillsSunrise, "center 60%"]].map(([im, pos]) => (
              <figure key={im.src}>
                <img src={im.src} alt={im.alt} loading="lazy" style={{ objectPosition: pos }} />
                <figcaption>{im.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </header>

      <Band tone="cream">
        <Reveal><h2>History</h2></Reveal>

        <Reveal className="row-aside">
          <p>
            The Eskaya's history is deeply intertwined with the broader history of Bohol and the Philippines. As an indigenous
            community predating Spanish colonization (which began in the Philippines in the 16th century), the Eskaya are
            considered among the original inhabitants of the island's interior.
          </p>
          <aside className="callout key">
            <h4>Key Milestone</h4>
            <p className="big">1997 — IPRA Recognition</p>
            <p>
              Republic Act No. 8371 (Indigenous Peoples' Rights Act) formally recognized the rights of indigenous cultural
              communities, including the Eskaya, to their ancestral domain, self-governance, and cultural integrity.
            </p>
          </aside>
        </Reveal>

        <Reveal className="row-aside">
          <p>
            Spanish colonization brought significant changes to lowland communities through the reducción policy (resettlement of
            scattered populations into concentrated towns). Many interior communities, including ancestors of the Eskaya, retreated
            further into the mountains to preserve their way of life and avoid forced resettlement and conversion.
          </p>
          <aside className="callout key">
            <h4>Documentation</h4>
            <p className="big">Academic Research</p>
            <p>
              The Eskaya have been the subject of linguistic and anthropological research by scholars including Jason William
              Lobel and others, particularly regarding their unique writing system and oral traditions.
            </p>
          </aside>
        </Reveal>

        <Reveal as="ol" className="dates" aria-label="Key dates">
          {DATES.map(([y, t]) => (<li key={y}><b>{y}</b><span>{t}</span></li>))}
        </Reveal>
      </Band>

      <Band tone="sand">
        <Split flip img={IMG.writingBook} ratio="4/3">
          <h2>Origin Narrative</h2>
          <p>
            One of the most significant documented aspects of Eskaya history is their oral tradition, which recounts a founding
            narrative and the development of their script. Researchers, including those cited in peer-reviewed linguistics and
            anthropology journals, have noted that the Eskaya possess an origin narrative that links them to a distinct cultural
            identity separate from lowland Visayans.
          </p>
          <p>
            The 20th century brought greater contact with lowland Philippine society, government administration, and eventually
            the formal recognition of indigenous rights under the 1987 Philippine Constitution and subsequently Republic Act No.
            8371 (IPRA) in 1997.
          </p>
        </Split>
      </Band>

      <Band tone="cream">
        <Split img={IMG.gathering} ratio="3/2">
          <h2>Customs and Traditions</h2>
          <p>
            The Eskaya maintain a rich set of customs and traditions that govern community life, mark important life transitions,
            and reinforce cultural identity. These traditions are passed down through oral instruction, community ceremonies, and
            the use of the Eskaya language and script in cultural contexts.
          </p>
          <p>
            Community gatherings play a central role in Eskaya cultural life. Celebrations, ceremonies, and communal work
            activities reinforce social bonds and ensure that younger generations are exposed to traditional knowledge and
            practices.
          </p>
        </Split>

        <Reveal className="callout">
          <p>
            <strong>Important note:</strong> Detailed documentation of specific ritual practices, sacred ceremonies, or restricted
            cultural knowledge is intentionally omitted here, in accordance with the principle of respecting indigenous cultural
            sensitivities. Some aspects of Eskaya tradition are not for public dissemination, and this website honors that
            boundary.
          </p>
        </Reveal>

        <div className="card-grid three">
          {[
            ["Communal Practices", "Community gatherings, cooperative work (bayanihan-style), and shared celebrations remain central to Eskaya social life."],
            ["Life-Cycle Rites", "Transitions such as birth, coming of age, marriage, and death are marked by cultural observances that affirm community identity."],
            ["Oral Transmission", "Knowledge, history, and cultural values are transmitted through storytelling, song, and recitation in the Eskaya language."],
          ].map(([h, t]) => (
            <Reveal key={h} className="card pad accent"><h3>{h}</h3><p>{t}</p></Reveal>
          ))}
        </div>
      </Band>

      <Band tone="earth">
        <Reveal>
          <h2>Beliefs and Practices</h2>
          <div className="cols-3">
            <p>
              The Eskaya hold traditional cosmological beliefs that are reflected in their oral literature, including creation
              narratives and accounts of the world's origins. These beliefs are not merely historical artifacts but living parts
              of Eskaya cultural identity.
            </p>
            <p>
              Like many indigenous Philippine communities, the Eskaya's belief system encompasses relationships with the natural
              world, ancestral connections, and a cosmology that differs from mainstream Philippine religious traditions. Over
              centuries of contact with the wider Philippine society, many Eskaya individuals also observe Christianity while
              maintaining elements of indigenous belief.
            </p>
            <p>
              The relationship between the natural environment and spiritual life is significant in Eskaya tradition. The
              mountains, rivers, and forests of their homeland are imbued with cultural and spiritual meaning reflected in their
              oral traditions and traditional ecological knowledge.
            </p>
          </div>
        </Reveal>
      </Band>

      <Band tone="cream">
        <Reveal className="measure-wide">
          <h2>Arts, Crafts, Clothing, Music &amp; Food</h2>
          <p>
            The material culture of the Eskaya encompasses traditional weaving, craftsmanship, music, and culinary traditions that
            reflect their relationship with the natural environment and their social values.
          </p>
        </Reveal>

        <Reveal className="mosaic">
          <figure className="tall wide">
            <img src={IMG.arts.src} alt={IMG.arts.alt} loading="lazy" style={{ objectPosition: "center 30%" }} />
            <figcaption>{IMG.arts.caption}</figcaption>
          </figure>
          <figure className="tall">
            <img src={IMG.craft.src} alt={IMG.craft.alt} loading="lazy" />
            <figcaption>{IMG.craft.caption}</figcaption>
          </figure>
          <figure className="wide">
            <img src={IMG.dance.src} alt={IMG.dance.alt} loading="lazy" style={{ objectPosition: "center 35%" }} />
            <figcaption>{IMG.dance.caption}</figcaption>
          </figure>
          <figure>
            <img src={IMG.dancing.src} alt={IMG.dancing.alt} loading="lazy" />
            <figcaption>{IMG.dancing.caption}</figcaption>
          </figure>
        </Reveal>

        <div className="card-grid two">
          {[
            ["Weaving & Crafts", "Traditional weaving is practiced by Eskaya women, producing textiles and woven goods using materials sourced from the local environment. Weaving patterns carry cultural significance and aesthetic value rooted in Eskaya tradition. Basketry and other craft traditions are also practiced."],
            ["Music & Oral Arts", "Music, song, and chant are integral to Eskaya cultural expression. Traditional songs and musical forms accompany ceremonies, work, and community gatherings. The oral poetry and song traditions of the Eskaya are closely linked to their language and literary heritage."],
            ["Clothing & Adornment", "Traditional Eskaya clothing reflects the practical needs of upland mountain life while incorporating cultural aesthetic elements. Woven textiles are used in traditional attire, particularly for cultural and ceremonial occasions."],
            ["Food & Agriculture", "The Eskaya's traditional diet is based on the produce of their agricultural practices — primarily upland rice cultivation, root crops, and the harvest of forest products. Traditional food preparation methods and agricultural knowledge are part of the Eskaya's indigenous knowledge system."],
          ].map(([h, t]) => (
            <Reveal key={h} className="card pad accent"><h3>{h}</h3><p>{t}</p></Reveal>
          ))}
        </div>

        <Reveal className="foods">
          {FOODS.map(([im, name]) => (
            <figure key={name}>
              <img src={im.src} alt={im.alt} loading="lazy" />
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal className="callout">
          <p>
            <strong>A note on representation:</strong> The Eskaya are a living, dynamic community. Their cultural expressions
            continue to evolve. The descriptions here are based on documented academic and cultural sources and should not be taken
            as exhaustive or static characterizations.
          </p>
        </Reveal>
      </Band>
      <Footer />
    </>
  );
}

export default History;
