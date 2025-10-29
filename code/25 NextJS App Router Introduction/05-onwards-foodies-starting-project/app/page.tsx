import classes from './style/Page.module.css';
import HomePageHeader from '../components/HomePage/HomePageHeader';

export default function Home() {
  return (
    <>
      <HomePageHeader classes={classes} />
      <main className={classes.section}></main>
    </>
  );
}
