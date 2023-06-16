import logo from './logo.svg';
import './App.css';
import './button.css';
import './index.css'
import snacks from "./img/snacks.png"
import petal from "./img/petals.gif"

function Topnav(props) {
  return (
    <div className='topnav'>
      <div className="title">
          <p>💗 Welcome to Purefoams Shop! 💗</p>
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
    <div className="wrapper">
      <div className="sliding-background"></div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Topnav />
      <Slider />
      <div className="petal-wrapper">
        <img src={petal} className="petal" />
      </div>
      {/* <div className="grid-cols-2">
        <div className="cols-2-1">
          <div className="about-title">About Purefoams Shop</div>
          <div className="about-desc">
            <img src={snacks} width="200rem"/>
          </div>
        </div>
        <div className="cols-2-2"></div>
        <div clasName="cols-2-3"></div>
      </div> */}
    </div>
  );
}

export default App;
