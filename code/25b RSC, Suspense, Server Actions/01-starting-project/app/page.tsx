import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  return (
    <main>
      <ErrorBoundary>
        {/* <ClientDemo>
        <RSCDemo />
         it's possible to use server components inside client components as children
      </ClientDemo>*/}
        {/*  <DataFetchingDemo />*/}
        {/* <ServerActionsDemo />*/}
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
