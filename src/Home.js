import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radicallly Successful Business Product"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="49538094"
          title="Fitbit Charge 3 Fitness Activity Tracker"
          price={76.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71YGrhhoqUL._AC_UX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4903850"
          title="BalanceFrom GoYoga All Purpose High Density Non-Slip Exercise Yoga Mat with Carrying Strap"
          price={14.89}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/812bmNPkGXL._AC_SX569_.jpg"
        />
        <Product
          id="23445930"
          title="Revlon One-Step Hair Dryer And Volumizer Hot Air Brush, Black (Packaging May Vary)"
          price={98.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Uv3VOrCAL._SX425_.jpg"
        />
        <Product
          id="3254354345"
          title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
          price={49.43}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61IBBVJvSDL._AC_SY879_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={120.92}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SY879_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
