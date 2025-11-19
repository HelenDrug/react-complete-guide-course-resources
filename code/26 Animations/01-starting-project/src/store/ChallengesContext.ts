import type { Challenge, ChallengeStatus } from "../shared/types.ts";
import { createContext } from "react";

export type ChallengesContextType = {
  challenges: Challenge[];
  addChallenge: (challenge: Challenge) => void;
  deleteChallenge: (challengeId: string) => void;
  updateChallengeStatus: (
    challengeId: string,
    newStatus: ChallengeStatus,
  ) => void;
};

export const ChallengesContext = createContext<ChallengesContextType>({
  challenges: [],
  addChallenge: () => {},
  deleteChallenge: () => {},
  updateChallengeStatus: () => {},
});
