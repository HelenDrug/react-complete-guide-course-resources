import type { ClassNameProps } from '../../shared/types';

export default function CommunityHeader({ classes }: ClassNameProps) {
  const { header, highlight } = classes;
  return (
    <header className={header}>
      <h1>
        One shared passion: <span className={highlight}>Food</span>
      </h1>
      <p>Join our community and share your favorite recipes!</p>
    </header>
  );
}
