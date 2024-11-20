import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";
import TeamMembers from "./components/TeamMembers";
import Location from "./components/Location";
import Foot from "./components/Footer";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <Navigation />
      <img
        src="hero.png"
        id="home"
        className="w-full bg-red-500 pt-12 md:pt-16"
      />
      <AboutUs />
      <TeamMembers />
      <Posts />
      <Location />
      <Foot />
    </div>
  );
}

export default App;
