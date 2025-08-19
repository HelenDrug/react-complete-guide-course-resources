import NewsletterSignup from '../components/NewsletterSignup';
import PageLayout from "../components/PageLayout";

function Newsletter() {
    return (
        <PageLayout title="Join our awesome newsletter!">
            <NewsletterSignup/>
        </PageLayout>
    );
}

export default Newsletter;

export async function action({request}) {
    const data = await request.formData();
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    return {message: 'Signup successful!'};
}
