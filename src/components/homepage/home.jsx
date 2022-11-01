import React from "react";
import Navdown from "../navbar2/navdown";

import Cards from "./cards/cards";
import LogoCards from "./cards/logoCards";
import ShopCards from "./cards/shopCards";
import "./home.css";
import Videoframe from "./uppervideo/videoframe";


function Home() {
  return (
    <div>
     <Navdown/>
      <Videoframe />

    <div className="homepage">
      <div className="card-container">
        {sources.cards.map(({ src, headline, deadline }) => (
          <Cards src={src} headline={headline} deadline={deadline} key={src} />
        ))}
      </div>
      <div className="homepage-heading">
        <h1>TRENDING BRANDS</h1>
      </div>
      <div className="logo-cards">
        {sources.logoCards.map(({ src }) => (
          <LogoCards src={src} key={src} />
        ))}
      </div>
    </div>
      <div className="shopCards">
        {sources.shopCards.map(({ src, headline, deadline, bttn }) => (
          <ShopCards
            src={src}
            headline={headline}
            deadline={deadline}
            bttn={bttn}
            key={src}
          />
        ))}
      </div>
      {/* <div className="footer">
      <Footer/>

      </div> */}
    </div>
  );
}

export default Home;

const sources = {
  cards: [
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_ultimate_tailoring_moment_870x1110.jpg",
      headline: "TEAM TAILORED",
      deadline: "Excecutive realness",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_corsage_dressing_moment_870x1110.jpg",
      headline: "SCENE STEALERS",
      deadline: "Corset Cuts",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_colour_and_shine_pu_moment_870x1110.jpg",
      headline: "RISE 'N' SHINE",
      deadline: "PU for you",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/hero/tstm_refresh3_mob_ww_v2.png",
      headline: "CLUBCORE ROMANCE",
      deadline: "Going OUT-out with ASOS design",
    },
  ],
  logoCards: [
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg",
    },
  ],

  shopCards: [
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_asos_design_halloween_moment_870x1110.jpg",
      headline: "TOMMY JEANS",
      deadline: "Denim of Dreams",
      bttn: "SHOP NOW",
    },
    {
      src: "https://content.asos-media.com/-/media/homepages/ww/2022/sept/26/moments/ww_global_tommy_jeans_moment_870x1110.jpg",
      headline: "SERVING SPOOKY",
      deadline: "Goth season is here",
      bttn: "SHOP HALLOWEEN",
    },
  ],
};
