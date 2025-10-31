import classes from './ShareMealContent.module.css';
import ImagePicker from './ImagePicker';
import { shareMeal } from '../../../../db/actions';
import MealFormSubmit from './MealFormSubmit';

export default function ShareMealContent() {
  return (
    <main className={classes.main}>
      <form className={classes.form} action={shareMeal}>
        <div className={classes.row}>
          <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" name="email" required />
          </p>
        </div>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </p>
        <p>
          <label htmlFor="summary">Short Summary</label>
          <input type="text" id="summary" name="summary" required />
        </p>
        <p>
          <label htmlFor="instructions">Instructions</label>
          <textarea id="instructions" name="instructions" rows={10} required></textarea>
        </p>
        <ImagePicker label={''} name="image" />
        <p className={classes.actions}>
          <MealFormSubmit />
        </p>
      </form>
    </main>
  );
}
