// One place to register every photograph, with the alt text and caption used wherever it appears.
// Folders mirror the site: home/ community/ history/ language/ digital/ creators/
// Photographer credits are still unverified: replace CREDIT with confirmed sources when you have them.

// home
import homeHero from "./home/bohol-landscape-hero.jpg";
import villageRoad from "./home/bohol-upland-village-road.jpg";
// community
import hillsOverview from "./community/bohol-chocolate-hills-overview.jpg";
import communityGroup from "./community/community.jpg";
import elder from "./community/eskaya-community-elder.jpg";
import reading from "./community/eskaya-community-reading.jpg";
import scriptChart from "./community/eskaya-script.gif";
import locationMap from "./community/geographical-lcoation.png";
import tribu from "./community/tribu-eskaya.jpg";
import writingBook from "./community/writing-system.jpg";
// history
import hillsSunrise from "./history/bohol-chocolate-hills-sunrise.jpg";
import gathering from "./history/community-gatheting.jpg";
import folkDance from "./history/cultural-dance-performance.jpg";
import customs from "./history/customs-and-tradition.jpg";
import arts from "./history/eskaya-arts.jpg";
import craft from "./history/eskaya-craft.jpg";
import dance from "./history/eskaya-dance.jpg";
import dancing from "./history/eskaya-dancing.jpg";
import foodSuso from "./history/food-Sinunobang-Suso.jpg";
import foodBodbod from "./history/food-bodbod.jpg";
import foodLatik from "./history/food-latik.jpg";
import foodTaro from "./history/food-taro.jpg";
import oralTradition from "./history/ora-tradition.jpg";
import origin from "./history/origin.jpg";
import tinikling from "./history/tinikling-bamboo-dance.jpg";
import tribalHouse from "./history/tribal-house.jpg";
// language
import scriptSample from "./language/Eskayascript.gif";
import languageSign from "./language/eskaya-language.jpg";
import livelihood from "./language/eskaya-livelihood.jpg";
import weaving from "./language/technological-weaving.jpg";
// digital
import manuscript from "./digital/eskaya-script-manuscript.jpg";
import manuscriptDetail from "./digital/eskaya-script-manuscript-detail.jpg";
import languageMap from "./digital/eskayan-language-map-bohol.webp";
// creators
import lovelyn from "./creators/lovelyn-pojas.png";
import harvey from "./creators/harvey-quibol.png";
import jilliane from "./creators/jilliane-aguanza.png";
import amber from "./creators/amber.png";
import jelyn from "./creators/jelyn.jpg";
import kervee from "./creators/kervee.png";
import jarl from "./creators/jarl.png";
import francis from "./creators/francis.png";
import ceejhay from "./creators/cee-jhay.jpg";

export const CREDIT = "Source to be confirmed";

const i = (src, alt, caption = alt) => ({ src, alt, caption });

export const IMG = {
  // home
  homeHero:      i(homeHero, "Chocolate Hills of Bohol in warm light", "The Chocolate Hills, one of Bohol's best-known landscapes."),
  villageRoad:   i(villageRoad, "A road through an upland village in Bohol", "A village road in the uplands of southeastern Bohol."),
  // community
  hillsOverview: i(hillsOverview, "Chocolate Hills, Bohol", "Rolling hills in the interior of Bohol."),
  communityGroup:i(communityGroup, "Community members gathered in front of a two-storey wooden building", "Community members gathered in front of a wooden community building."),
  elder:         i(elder, "A smiling community elder", "A community elder."),
  reading:       i(reading, "A young community member reading from a handwritten book", "A community member reading from a handwritten book."),
  scriptChart:   i(scriptChart, "Chart of Eskaya script characters", "Chart of Eskaya script characters."),
  locationMap:   i(locationMap, "Map of Bohol with the southeastern municipalities highlighted", "Southeastern Bohol, where the Eskaya communities are located."),
  tribu:         i(tribu, "Five Eskaya men standing together in matching shirts", "Eskaya community men."),
  writingBook:   i(writingBook, "An old handwritten book written in the Eskaya script", "An old handwritten book in the Eskaya script."),
  // history
  hillsSunrise:  i(hillsSunrise, "Chocolate Hills at sunrise", "The hills of Bohol at sunrise."),
  gathering:     i(gathering, "Community members seated together at a gathering", "A community gathering."),
  customs:       i(customs, "Women in traditional woven clothing sitting together", "Women in traditional woven clothing."),
  arts:          i(arts, "A painted wall chart showing figures in traditional dress", "A painted chart of figures in traditional dress."),
  craft:         i(craft, "A carved wooden object from the Eskaya community", "A carved wooden object."),
  dance:         i(dance, "Dancers performing at a community event", "Dancers at a community event."),
  dancing:       i(dancing, "Dancers in green costumes performing on an outdoor stage", "Dancers performing on an outdoor stage."),
  foodSuso:      i(foodSuso, "A dish of shellfish cooked with chili in coconut milk", "Sinunobang suso."),
  foodBodbod:    i(foodBodbod, "Bodbod, a rice cake wrapped in banana leaf", "Bodbod, wrapped in banana leaf."),
  foodLatik:     i(foodLatik, "Latik, a caramelised coconut sweet", "Latik."),
  foodTaro:      i(foodTaro, "Taro roots on a plate", "Taro, a root crop."),
  oralTradition: i(oralTradition, "A young woman reading aloud from a handwritten book", "Reading aloud from a handwritten book."),
  origin:        i(origin, "Eskaya community members posing together outdoors", "Eskaya community members."),
  tinikling:     i(tinikling, "Tinikling bamboo dance", "Tinikling, a Philippine folk dance. Not specific to the Eskaya."),
  folkDance:     i(folkDance, "Philippine folk dance in traditional dress", "Philippine folk dance in traditional dress. Not specific to the Eskaya."),
  tribalHouse:   i(tribalHouse, "A wooden building with a veranda in an Eskaya settlement", "A wooden community building."),
  // language
  scriptSample:  i(scriptSample, "Sample of Eskaya script characters", "Sample Eskaya script characters."),
  languageSign:  i(languageSign, "A hand-painted board with Eskaya script and a portrait", "A hand-painted board in the Eskaya script."),
  livelihood:    i(livelihood, "A farmer tending vegetable plots", "Upland farming."),
  weaving:       i(weaving, "A woman holding up a handwoven textile", "A handwoven textile."),
  // digital
  manuscript:    i(manuscript, "Handwritten page in the Eskaya script", "A handwritten page in the Eskaya script."),
  manuscriptDetail: i(manuscriptDetail, "Close-up of handwritten Eskaya script", "Close-up of handwritten Eskaya script."),
  languageMap:   i(languageMap, "Infographic about the Eskayan language and its location in Bohol", "Eskayan language at a glance."),
};

export const TEAM = { lovelyn, harvey, jilliane, amber, jelyn, kervee, jarl, francis, ceejhay };
