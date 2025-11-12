"use server";
import fs from "node:fs";
import type { User } from "@/shared/types";

export async function saveUserAction(formData: FormData) {
  const data = fs.readFileSync("dummy-db.json", "utf-8");
  const instructors = JSON.parse(data);
  const newInstructor: User = {
    id: new Date().getTime().toString(),
    name: formData.get("name") as string,
    title: formData.get("title") as string,
  };

  instructors.push(newInstructor);
  fs.writeFileSync("dummy-db.json", JSON.stringify(instructors));
}
