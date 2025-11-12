import DataFetchingDemo from "@/components/DataFtechingDemo";

export default function Home() {
  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
         it's possible to use server components inside client components as children
      </ClientDemo>*/}
      <DataFetchingDemo />
    </main>
  );
}
