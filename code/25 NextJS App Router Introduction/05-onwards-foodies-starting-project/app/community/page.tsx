import classes from './Page.module.css';
import CommunityHeader from '../../components/Community/CommunityHeader';
import CommunityPerks from '../../components/Community/CommunityPerks';

export default function CommunityPage() {
  return (
    <>
      <CommunityHeader classes={classes} />
      <CommunityPerks classes={classes} />
    </>
  );
}
