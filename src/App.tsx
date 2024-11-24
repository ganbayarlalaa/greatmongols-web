import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";
import Presidents from "./components/Presidents";
import Location from "./components/Location";
import Foot from "./components/Footer";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <Navigation />
      <img
        src="https://raw.githubusercontent.com/ganbayarlalaa/greatmongols-web/refs/heads/main/public/hero.png"
        id="home"
        className="w-full  pt-12 md:pt-16"
      />
      <AboutUs />
      <Presidents />
      <Posts />
      <Location />
      <Foot />
    </div>
  );
}

export default App;