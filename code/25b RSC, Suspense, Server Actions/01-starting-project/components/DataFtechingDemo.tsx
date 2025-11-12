import * as fs from "node:fs/promises";
import type { User } from "@/shared/types";

export default async function DataFetchingDemo() {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users: User[] = JSON.parse(data);

  return (
    <div className="rsc">
      <h2>RSC with Data Fetching</h2>
      <p>
        Uses <strong>async / await</strong> for data fetching.
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.title})
          </li>
        ))}
      </ul>
    </div>
  );
}
