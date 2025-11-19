import Header from "../components/Challenge/Header.tsx";
import Challenges from "../components/Challenge/Challenges.tsx";
import ChallengesContextProvider from "../store/ChallengesContextProvider.tsx";

export default function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
