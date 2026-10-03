import Footer from "./Footer.jsx";
import { Reveal, PageHead, Split, Photo, Band } from "./components.jsx";
import { IMG } from "./assets/images/index.js";

const SPECS = [
  ["Script Type", "Syllabary (abugida)"], ["Unicode Block", "U+11940–U+1195F"], ["Added to Unicode", "Version 13.0 (2020)"],
  ["Approx. Characters", "~71–75 documented"], ["Direction", "Left to right"], ["Status", "Living / Actively used"],
];

const LIVELIHOOD = [
  ["Livelihood Practices", "The Eskaya traditionally practice upland agriculture, including the cultivation of rice and root crops suited to the mountainous terrain of southeastern Bohol. Fishing, gathering of forest products, and small-scale animal husbandry have also been documented as components of the traditional livelihood system."],
  ["Environmental Knowledge", "The Eskaya's traditional ecological knowledge encompasses deep familiarity with the flora and fauna of their homeland, including the medicinal properties of plants, the behavior of local wildlife, seasonal indicators for agriculture, and the management of forest and water resources. This knowledge is embedded in the language and oral tradition."],
  ["Traditional Technologies", "Traditional technologies include weaving implements, agricultural tools suited to upland farming, and construction methods adapted to the mountain environment. The material culture reflects both the resources available in the local environment and the accumulated technological knowledge of generations."],
  ["Medicinal Knowledge", "Indigenous medicinal knowledge — the use of local plants and natural materials for healing — is a documented component of Eskaya indigenous knowledge. Traditional healers hold specialized knowledge of medicinal plants and treatment practices that are part of the community's intangible heritage."],
];

function Language() {
  return (
    <>
      <PageHead tone="paper" kicker="Language & Indigenous Knowledge" title="The Eskaya Script and Living Knowledge System" img={IMG.scriptSample} ratio="3/2" fit="contain">
        <p>
          The Eskaya possess a remarkable indigenous writing system alongside a rich oral tradition and body of ecological and
          technological knowledge accumulated over generations.
        </p>
      </PageHead>

      <Band tone="cream">
        <Split img={IMG.languageSign} ratio="4/3">
          <h2>The Eskaya Language</h2>
          <p>
            The Eskaya speak their own indigenous language, also called Eskaya (or Eskayan). It is classified within the
            Austronesian language family, but it has features and vocabulary that distinguish it from neighboring Visayan
            languages such as Cebuano. Linguists who have studied the language note its unique characteristics alongside its
            broader Austronesian affiliations.
          </p>
          <p>
            The language is closely tied to cultural identity. Community members who are fluent in the Eskaya language — and
            particularly those who can use the Eskaya script — are considered to have full membership in the cultural community
            in the indigenous sense.
          </p>
        </Split>
        <Reveal className="cols-2 tight-top">
          <p>
            Most Eskaya speakers are also fluent in Cebuano (the regional lingua franca of Bohol and much of Central Visayas),
            Filipino (the national language), and varying degrees of English. This multilingualism is a product of both
            historical contact and contemporary educational requirements.
          </p>
          <p>
            Language vitality is a concern shared by many indigenous language communities globally. Efforts to document and
            transmit the Eskaya language are documented in academic literature and in community-based cultural programs.
          </p>
        </Reveal>
      </Band>

      <Band tone="sand">
        <Split flip img={IMG.scriptChart} ratio="3/4" fit="contain">
          <h2>The Eskaya Writing System</h2>
          <p className="subhead">A Distinct Indigenous Script</p>
          <p>
            The Eskaya writing system is a syllabary — a script where each character represents a syllable rather than a single
            consonant or vowel. This is consistent with other indigenous Philippine scripts (such as Baybayin), but the Eskaya
            script is visually and structurally distinct from Baybayin and from other known Philippine writing systems.
          </p>
          <p>
            The Eskaya script is notable enough to have been assigned its own Unicode block: the <strong>Eskaya block
            (U+11940–U+1195F)</strong>, recognized by the Unicode Consortium in Unicode 13.0 (2020). This formal encoding reflects
            the script's documentation by linguists and its uniqueness among world writing systems.
          </p>
        </Split>
        <Reveal className="cols-2 tight-top">
          <p>
            Researchers including Jason William Lobel have published academic work on the Eskaya language and script. The script
            has approximately 71–75 characters documented in academic sources, representing the syllables of the Eskaya language.
          </p>
          <p>
            The origins of the Eskaya script are discussed in the community's oral tradition and in academic literature. Some
            research attributes the contemporary form of the script to a 20th-century figure in the community, while others note
            evidence of an older tradition. This remains a subject of scholarly discussion.
          </p>
        </Reveal>
        <dl className="specs">
          {SPECS.map(([k, v]) => (
            <Reveal key={k} className="spec"><dt>{k}</dt><dd>{v}</dd></Reveal>
          ))}
        </dl>
      </Band>

      <Band tone="cream">
        <Split img={IMG.oralTradition} ratio="4/3" pos="30% 40%">
          <h2>Oral Traditions</h2>
          <p>
            The Eskaya have a rich corpus of oral literature, including creation narratives, historical accounts, songs, poetry,
            proverbs, and epic traditions. These oral forms serve as repositories of cultural knowledge, historical memory, and
            moral values.
          </p>
          <p>
            Oral traditions are performed in the Eskaya language and are central to cultural transmission. They describe the
            origins of the Eskaya people, their relationship to their homeland, their cosmological beliefs, and their historical
            experiences. Researchers have documented some of these oral traditions, making them accessible to the wider academic
            community while acknowledging the community's ownership of this cultural heritage.
          </p>
          <p>
            The relationship between the oral tradition and the Eskaya script is significant: the script is used to write down
            oral texts, preserving them in a form that can be passed on and consulted. This integration of oral and written
            tradition is one of the distinctive features of Eskaya cultural life.
          </p>
        </Split>
      </Band>

      <Band tone="moss contour">
        <Reveal className="livelihood-head">
          <h2 className="on-dark">Livelihood, Environmental &amp; Indigenous Knowledge</h2>
          <div className="duo"><Photo img={IMG.livelihood} ratio="3/2" /><Photo img={IMG.weaving} ratio="3/2" /></div>
        </Reveal>
        <div className="card-grid two">
          {LIVELIHOOD.map(([h, t]) => (
            <Reveal key={h} className="card pad light"><h3>{h}</h3><p>{t}</p></Reveal>
          ))}
        </div>
      </Band>
      <Footer />
    </>
  );
}

export default Language;
