import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo />
        {/* it's possible to use server components inside client components as children */}
      </ClientDemo>
    </main>
  );
}
