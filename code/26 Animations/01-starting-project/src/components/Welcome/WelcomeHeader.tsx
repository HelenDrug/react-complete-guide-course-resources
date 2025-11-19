import { Link } from "react-router-dom";
import cityImg from "../../assets/city.jpg";
import heroImg from "../../assets/hero.png";

export default function WelcomeHeader() {
  return (
    <header id="welcome-header">
      <div id="welcome-header-content">
        <h1>Ready for a challenge?</h1>
        <Link id="cta-link" to="/challenges">
          Get Started
        </Link>
      </div>
      <img
        src={cityImg}
        alt="A city skyline touched by sunlight"
        id="city-image"
      />
      <img src={heroImg} alt="A superhero wearing a cape" id="hero-image" />
    </header>
  );
}
