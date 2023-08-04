import "./css/App.css";
import "./css/index.css";
import NyanCat from "./NyanCat";
import logo from "./img/logo.svg"
import snow from "./img/rec-product-1.png"
import pig from "./img/rec-product-2.png"
import bear from "./img/rec-product-3.png"
import img4 from "./img/rec-product-4.png"
import img5 from "./img/rec-product-5.png"
import img6 from "./img/rec-product-6.png"
import img7 from "./img/rec-product-7.png"
import img8 from "./img/rec-product-8.png"
import img9 from "./img/rec-product-9.png"
import ig from "./img/instagram.svg"

function Topnav(props) {
  return (
    <div className="topnav">
      <div className="title">
        <a href="./index.html">Purefoams</a>
      </div>
      <div className="nav-buttons">
        <a>Products</a>
        <a>Contacts & Shipment</a>
      </div>
    </div>
  );
}

// function Slider(props) {
//   return (
//     <div className="wrapper-slider">
//       <div className="sliding-background"></div>
//     </div>
//   );
// }

function AboutUs(props) {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <div className="about-title">About Us:</div>
        <div className="about-desc">
          We are a squishy and slime shop from Indonesia. We sell products
          from outside like blah blah thank you for visiting, this is just
          randome text for now. please fill this later. Check out socials and
          something: random text for now will fill in icons for this text to fill
          text to fill text to filltext to filltext to filltext to fill
          text to fill text to fill text to fill text to fill text to fill 
          text to fill text to fill text to fill text to fill
        </div>
      </div>
      <img src={logo} className="about-us-img" alt="logo"></img>
    </div>
  );
}

function RecentProducts(props) {
  return (
    <div className="recent-products">
      <div className="recent-products-title">Featured Products</div>
      <div className="recent-products-grid">
        <div className="recent-products-item">
          <p>First snow by @taketherare ⛄</p>
          <img src={snow} alt="recent-product-1"></img>
        </div>
        <div className="recent-products-item">
          <p>Pancake Piggies 🐷🥞</p>
          <img src={pig} alt="recent-product-2"></img>
        </div>
        <div className="recent-products-item">
          <p>Snow Bears 🏔🐻</p>
          <img src={bear} alt="recent-product-3"></img>
        </div>
        <div className="recent-products-item">
          <p>New Jeans McD set 🐇👖</p>
          <img src={img4} alt="recent-product-4"></img>
        </div>
        <div className="recent-products-item">
          <p>New Jeans Slime 🐇👖</p>
          <img src={img5} alt="recent-product-5"></img>
        </div>
        <div className="recent-products-item">
          <p>Hampers CNY Gift 🧧</p>
          <img src={img6} alt="recent-product-6"></img>
        </div>
        <div className="recent-products-item">
          <p>RSK Piggy Egg Blankets 🐖🛌</p>
          <img src={img7} alt="recent-product-7"></img>
        </div>
        <div className="recent-products-item">
          <p>New Korean cake 🎂</p>
          <img src={img8} alt="recent-product-8"></img>
        </div>
        <div className="recent-products-item">
          <p>Christmas Slime 🎄</p>
          <img src={img9} alt="recent-product-9"></img>
        </div>
      </div>
    </div>
  );
}

function Slider(props) {
  return (
    <div className="slider">
      <div className="slider-text">
        <p>Follow us @purefoams</p>
        <a href="https://www.instagram.com/purefoams/" target="_blank" rel="noreferrer">
          <img src={ig} className="instagram" alt="ig"></img>
        </a>
      </div>
      <div className="slider-wrapper">
        <div className="slider-window"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper-html">
      <Topnav />
      {/* <img src={petal} className="cherry-blossoms" alt="cherry blossoms" /> */}
      <AboutUs />
      <RecentProducts />
      <Slider />
      <NyanCat />
    </div>
  );
}

export default App;
