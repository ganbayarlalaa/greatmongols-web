import AboutUs from "./components/AboutUs";
import Foot from "./components/Footer";
import Location from "./components/Location";
import Navigation from "./components/Navigation";
import Posts from "./components/Posts";
import Presidents from "./components/Presidents";

const HomePage = () => {
    return (<><Navigation />
        <img
          src="https://ganbayarlalaa.github.io/greatmongols-web/hero.png"
          id="home"
          className="w-full pt-12 md:pt-16"
          alt="hero-image"
        />
        <AboutUs />
        <Presidents />
        <Posts />
        <Location />
        <Foot /></>)
}

export default HomePage;