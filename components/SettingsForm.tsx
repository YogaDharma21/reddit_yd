"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { updateUsername } from "@/app/action";
import SubmitButton from "./SubmitButton";

export function SettingsForm({
  username,
}: {
  username: string | null | undefined;
}) {
  return (
    <form action={updateUsername}>
      <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
      <Separator className="my-4" />
      <Label className="text-lg">Username</Label>
      <p className="text-muted-foreground">
        In this settings page you can change your username!
      </p>
      <Input
        defaultValue={username ?? undefined}
        name="username"
        required
        className="mt-2"
        min={2}
        maxLength={21}
      />
      <div className="w-full flex  mt-5 gap-x-5 justify-end">
        <Button variant={"secondary"} asChild type="button">
          <Link href={"/"}>Cancel</Link>
        </Button>
        <SubmitButton />
      </div>
    </form>
  );
}
