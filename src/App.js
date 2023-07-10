import "./App.css";
import "./button.css";
import "./index.css";
import petal from "./img/petals.gif";
import shopee from "./img/shopee.svg";
import instagram from "./img/instagram.svg";
import whatsapp from "./img/whatsapp.svg";
import NyanCat from "./NyanCat";

function Topnav(props) {
  return (
    <div className="topnav">
      <div className="title">
        <p> Welcome to Purefoams Shop! </p>
      </div>
      <div className="grid-cols-1">
        {/* <div className="btn-one">Home</div>
        <div className="btn-one">Shop all</div>
        <div className="btn-one">New arrival</div>
        <div className="btn-one">Sales</div>
        <div className="btn-one">FAQs</div> */}
        <button>Home</button>
        <button>Shop all</button>
        <button>New arrivals</button>
        <button>Sales</button>
        <button>FAQs</button>
      </div>
    </div>
  );
}

function Slider(props) {
  return (
    <div className="wrapper-slider">
      <div className="sliding-background"></div>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper-html">
      <Topnav />
      <Slider />
      {/* <img src={petal} className="cherry-blossoms" alt="cherry blossoms" /> */}
      <div className="grid-cols-2">
        <div className="cols-2-1">
          <div className="about-title">About Us:</div>
          <div className="about-desc">
            We are a squishy and slime shop from Indonesia. We sell products
            from outside like blah blah thank you for visiting, this is just
            randome text for now. please fill this later. Check out socials and
            something: random text for now will fill in icons for this
          </div>
          <div className="socials-grid">
            <a href="https://www.instagram.com/">
              <img
                src={instagram}
                className="instagram"
                href="https://www.instagram.com/"
                alt="instagram icon"
              />
            </a>
            <a href="https://shopee.com/">
              <img src={shopee} className="shopee" alt="shopee icon" />
            </a>
            <a href="https://www.whatsapp.com/">
              <img src={whatsapp} className="whatsapp" alt="whatsapp iccon" />
            </a>
          </div>
        </div>
        <div className="cols-2-2"></div>
        <div className="cols-2-3"></div>
      </div>
      <NyanCat />
      <section id="frame">cat</section>
    </div>
  );
}

export default App;
