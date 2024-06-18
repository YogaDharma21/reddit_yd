"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="animate-spin h-4 w-4 mr-2" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit">Change Username</Button>
      )}
    </>
  );
}
