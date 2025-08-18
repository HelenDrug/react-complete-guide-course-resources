import classes from './PageLayout.module.css';

export default function PageLayout({ title, children }) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}