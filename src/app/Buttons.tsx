"use client";
import { signIn, signOut } from "@/auth-client";

export function SigninButton() {
  return (
    <button onClick={() => signIn.social({ provider: "github" })}>
      Signin from github
    </button>
  );
}

export function SingoutButton() {
  return <button onClick={() => signOut()}>Signout</button>;
}
