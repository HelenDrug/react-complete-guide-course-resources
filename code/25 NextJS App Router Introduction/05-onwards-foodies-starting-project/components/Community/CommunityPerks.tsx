import Image from 'next/image';
import mealIcon from '../../assets/icons/meal.png';
import communityIcon from '../../assets/icons/community.png';
import eventsIcon from '../../assets/icons/events.png';
import type { ClassNameProps } from '../../shared/types';

export default function CommunityPerks({ classes }: ClassNameProps) {
  const { main, perks } = classes;
  return (
    <main className={main}>
      <h2>Community Perks</h2>

      <ul className={perks}>
        <li>
          <Image src={mealIcon} alt="A delicious meal" />
          <p>Share & discover recipes</p>
        </li>
        <li>
          <Image src={communityIcon} alt="A crowd of people, cooking" />
          <p>Find new friends & like-minded people</p>
        </li>
        <li>
          <Image src={eventsIcon} alt="A crowd of people at a cooking event" />
          <p>Participate in exclusive events</p>
        </li>
      </ul>
    </main>
  );
}
