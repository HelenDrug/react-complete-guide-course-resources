import UsePromiseDemo from "@/components/UsePromiseDemo";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
         it's possible to use server components inside client components as children
      </ClientDemo>*/}
      {/*  <DataFetchingDemo />*/}
      {/* <ServerActionsDemo />*/}
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
