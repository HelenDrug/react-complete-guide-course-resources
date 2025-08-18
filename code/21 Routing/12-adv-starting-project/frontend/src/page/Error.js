import PageLayout from "../components/PageLayout";
import {useRouteError} from "react-router-dom";

export default function Error() {
    const error = useRouteError()

    let title = "An error occurred!";
    let message = "Something went wrong. Please try again later.";

    if (error.status === 500) {
        message = error.data.message
    }
    if (error.status === 404) {
        title = "Not Found";
        message = "The page you are looking for does not exist.";
    }
    return <PageLayout title={title}>
        <p>{message}</p>
    </PageLayout>
}