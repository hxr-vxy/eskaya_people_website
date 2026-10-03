import Footer from "./Footer.jsx";
import { PageHead, Band } from "./components.jsx";
import { IMG } from "./assets/images/index.js";

function Today() {
  return (
    <>
      <PageHead tone="sand" kicker="The Community Today" title="This is Today" img={IMG.reading} ratio="4/3" pos="25% 40%">
        <p>Contemporary life, education, cultural preservation efforts and challenges.</p>
      </PageHead>
      <Band>
        <div className="callout measure">
          <p>This section is still being written. It will cover the topics above, using documented sources only.</p>
        </div>
      </Band>
      <Footer />
    </>
  );
}

export default Today;
