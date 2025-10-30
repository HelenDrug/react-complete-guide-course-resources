import classes from './MealDetailsContent.module.css';

export default function MealDetailsContent({ instructions }: { instructions: string }) {
  const formattedInstructions = instructions.replace(/\n/g, '<br/>');
  return (
    <main>
      <p
        className={classes.instructions}
        dangerouslySetInnerHTML={{ __html: formattedInstructions }}
      />
    </main>
  );
}
