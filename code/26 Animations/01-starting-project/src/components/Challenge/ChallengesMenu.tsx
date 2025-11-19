import Badge from "./Badge.tsx";
import type { AllChallenges, ChallengeStatus } from "../../shared/types.ts";
import type { ReactNode } from "react";

interface TabProps {
  isSelected: boolean;
  onSelect: () => void;
  badgeCaption: number;
  children: ReactNode;
}
function Tab({ isSelected, onSelect, badgeCaption, children }: TabProps) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
        <Badge caption={badgeCaption}></Badge>
      </button>
      {isSelected && <div className="active-tab-indicator" />}
    </li>
  );
}

interface ChallengesMenuProps {
  selectedStatus: ChallengeStatus;
  onSelectStatus: (status: ChallengeStatus) => void;
  challenges: AllChallenges;
  children: ReactNode;
}

export default function ChallengesMenu({
  selectedStatus,
  onSelectStatus,
  challenges,
  children,
}: ChallengesMenuProps) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedStatus === "active"}
          onSelect={() => onSelectStatus("active")}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedStatus === "completed"}
          onSelect={() => onSelectStatus("completed")}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedStatus === "failed"}
          onSelect={() => onSelectStatus("failed")}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
