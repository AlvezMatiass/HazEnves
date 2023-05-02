import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
const Plantas = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: "/img/fraseFondo.png",
          speed: -30,
          opacity: [0.7, 1],
          scale: [1.05, 1, "easeOutCubic"],
          shouldAlwaysCompleteAnimation: true,
          style: {
            backgroundPosition: "center right",
          },
        },
        {
          speed: -10,
          opacity: [0.6, 1],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,

          children: (
            <div className="imgFrase">
              <p>
                “Cada prenda está viva reflejando el espíritu de las plantas”
              </p>
            </div>
          ),
        },
      ]}
      className="container-plantas"
    />
  );
};

export default Plantas;
