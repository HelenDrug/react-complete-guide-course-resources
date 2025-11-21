import { useContext, useState } from "react";
import Challenge from "./Challenge/Challenge.tsx";
import ChallengesMenu from "./ChallengesMenu.tsx";
import type { AllChallenges, ChallengeStatus } from "../../shared/types.ts";
import { ChallengesContext } from "../../store/ChallengesContext.ts";
import { AnimatePresence, motion } from "framer-motion";

export default function Challenges() {
  const { challenges } = useContext(ChallengesContext);
  const [selectedStatus, setSelectedStatus] =
    useState<ChallengeStatus>("active");
  const [expanded, setExpanded] = useState<string | null>(null);

  function handleSelectStatus(newStatus: ChallengeStatus) {
    setSelectedStatus(newStatus);
  }

  function handleViewDetails(id: string) {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  }

  const filteredChallenges: AllChallenges = {
    active: challenges.filter((challenge) => challenge.status === "active"),
    completed: challenges.filter(
      (challenge) => challenge.status === "completed",
    ),
    failed: challenges.filter((challenge) => challenge.status === "failed"),
  };

  const displayedChallenges = filteredChallenges[selectedStatus];

  return (
    <div id="challenges">
      <ChallengesMenu
        challenges={filteredChallenges}
        onSelectStatus={handleSelectStatus}
        selectedStatus={selectedStatus}
      >
        <AnimatePresence>
          {displayedChallenges.length > 0 && (
            <motion.ol
              className="challenge-items"
              exit={{ y: -30, opacity: 0 }}
            >
              <AnimatePresence>
                {displayedChallenges.map((challenge) => (
                  <Challenge
                    key={challenge.id}
                    challenge={challenge}
                    onViewDetails={() => handleViewDetails(challenge.id)}
                    isExpanded={expanded === challenge.id}
                  />
                ))}
              </AnimatePresence>
            </motion.ol>
          )}
          {displayedChallenges.length === 0 && <p>No challenges found.</p>}
        </AnimatePresence>
      </ChallengesMenu>
    </div>
  );
}
