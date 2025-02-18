import React from "react";
import Logo from "../images/AppleTablet.png";
import ProductCard from "./ProductCard";

const Section = ({darkMode}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "10px",
        }}
      >
        <ProductCard
          title="iPhone 15 Pro"
          price="999"
          desc="The latest iPhone with A17 Pro chip, titanium design, and advanced camera system."
          image="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png"
          category="Smartphone"
          darkMode={darkMode}
        />

        <ProductCard
          title="MacBook Air (M2)"
          price="1199"
          desc="Ultra-thin and lightweight laptop with Apple M2 chip and Retina display."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-air-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1731974970795"
          category="Laptop"
          darkMode={darkMode}
        />

        <ProductCard
          title="AirPods Pro (2nd Gen)"
          price="249"
          desc="Active Noise Cancellation and Adaptive Transparency for an immersive sound experience."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7E4?wid=532&hei=582&fmt=png-alpha&.v=1723930332796"
          category="Accessories"
          darkMode={darkMode}
        />

        <ProductCard
          title="iPad Pro (M2)"
          price="1099"
          desc="Powerful tablet with M2 chip, Liquid Retina display, and ProMotion technology."
          // image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7E4?wid=532&hei=582&fmt=png-alpha&.v=1723930332796"
          image={Logo}
          category="Tablet"
          darkMode={darkMode}
        />

        <ProductCard
          title="iPhone 14 Plus"
          price="899"
          desc="A larger display, all-day battery life, and advanced dual-camera system."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14plus-digitalmat-gallery-3-202209?wid=728&hei=666&fmt=png-alpha&.v=1662055814336"
          category="Smartphone"
          darkMode={darkMode}
        />

        <ProductCard
          title="MacBook Pro 16-inch (M2 Pro)"
          price="2499"
          desc="Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and up to 22 hours of battery life."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-16-digitalmat-gallery-6-202410?wid=728&hei=666&fmt=png-alpha&.v=1728342368935"
          category="Laptop"
          darkMode={darkMode}
        />

        <ProductCard
          title="AirPods Max"
          price="549"
          desc="Premium over-ear headphones with Active Noise Cancellation and spatial audio."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=png-alpha&.v=1633623988000"
          category="Accessories"
          darkMode={darkMode}
        />

        <ProductCard
          title="Apple Watch Series 9"
          price="399"
          desc="Advanced smartwatch with a brighter display, faster S9 chip, and health monitoring features."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-4-202409?wid=728&hei=666&fmt=png-alpha&.v=1725019652498"
          category="Wearable"
          darkMode={darkMode}
        />

        <ProductCard
          title="iPad Air (M1)"
          price="599"
          desc="Thin and lightweight tablet with M1 chip, Liquid Retina display, and 5G connectivity."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-202203?wid=470&hei=556&fmt=png-alpha&.v=1645636337372"
          category="Tablet"
          darkMode={darkMode}
        />

        <ProductCard
          title="HomePod mini"
          price="99"
          desc="Compact smart speaker with Siri, room-filling sound, and smart home controls."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-spacegray-202110?wid=470&hei=556&fmt=png-alpha&.v=1632925510000"
          category="Smart Home"
          darkMode={darkMode}
        />

        <ProductCard
          title="Apple TV 4K"
          price="129"
          desc="Stream your favorite shows and movies in 4K HDR with Dolby Atmos sound."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=470&hei=556&fmt=png-alpha&.v=1664896361164"
          category="Entertainment"
          darkMode={darkMode}
        />

        <ProductCard
          title="iMac 24-inch (M1)"
          price="1299"
          desc="All-in-one desktop with a stunning 4.5K Retina display and M1 chip."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=470&hei=556&fmt=png-alpha&.v=1617768847000"
          category="Desktop"
          darkMode={darkMode}
        />

        <ProductCard
          title="MacBook Pro 16-inch (M2 Pro)"
          price="2499"
          desc="Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and up to 22 hours of battery life."
          image={Logo}
          darkMode={darkMode}
          category="Laptop"
        />

        <ProductCard
          title="MacBook Air (M2)"
          price="1199"
          desc="Ultra-thin and lightweight laptop with Apple M2 chip and Retina display."
          image="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png"
          category="Laptop"
          darkMode={darkMode}
        />

        <ProductCard
          title="MacBook Pro 16-inch (M2 Pro)"
          price="2499"
          desc="Powerful laptop with M2 Pro chip, Liquid Retina XDR display, and up to 22 hours of battery life."
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-16-digitalmat-gallery-6-202410?wid=728&hei=666&fmt=png-alpha&.v=1728342368935"
          category="Laptop"
          darkMode={darkMode}
        />
      </div>
    </>
  );
};

export default Section;
