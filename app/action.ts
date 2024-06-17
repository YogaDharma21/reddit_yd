"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";

export async function updateUsername(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) redirect("/api/auth/login");
  const username = formData.get("username") as string;
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      userName: username,
    },
  });
  return {
    message: "Succesfully updated name",
  };
}
