import IntroSection from "./WelcomeSection/IntroSection.tsx";
import WhySection from "./WelcomeSection/WhySection.tsx";
import FeaturesSection from "./WelcomeSection/FeaturesSection.tsx";
import JoinSection from "./WelcomeSection/JoinSection.tsx";

export default function WelcomeContent() {
  return (
    <main id="welcome-content">
      <IntroSection />
      <WhySection />
      <FeaturesSection />
      <JoinSection />
    </main>
  );
}
