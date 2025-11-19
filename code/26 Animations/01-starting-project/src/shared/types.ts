export type ChallengeStatus = "active" | "completed" | "failed";

export type Image = {
  src: string;
  alt: string;
};

export type Challenge = {
  id: string;
  status: ChallengeStatus;
  deadline: Date;
  title: string;
  description: string;
  image: Image;
  [key: string]: any;
};

export type AllChallenges = {
  active: Challenge[];
  completed: Challenge[];
  failed: Challenge[];
};
