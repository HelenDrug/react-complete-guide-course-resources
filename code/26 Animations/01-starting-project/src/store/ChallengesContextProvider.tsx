import { useState } from "react";
import type { ReactNode } from "react";
import type { Challenge, ChallengeStatus } from "../shared/types.ts";
import {
  ChallengesContext,
  type ChallengesContextType,
} from "./ChallengesContext.ts";

export default function ChallengesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  function addChallenge(challenge: Challenge) {
    setChallenges((prevChallenges) => [
      { ...challenge, id: Math.random().toString(), status: "active" },
      ...prevChallenges,
    ]);
  }

  function deleteChallenge(challengeId: string) {
    setChallenges((prevChallenges) =>
      prevChallenges.filter((challenge) => challenge.id !== challengeId),
    );
  }

  function updateChallengeStatus(
    challengeId: string,
    newStatus: ChallengeStatus,
  ) {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) => {
        if (challenge.id === challengeId) {
          return { ...challenge, status: newStatus };
        }
        return challenge;
      }),
    );
  }

  const challengesContext: ChallengesContextType = {
    challenges,
    addChallenge,
    deleteChallenge,
    updateChallengeStatus,
  };

  return (
    <ChallengesContext.Provider value={challengesContext}>
      {children}
    </ChallengesContext.Provider>
  );
}
