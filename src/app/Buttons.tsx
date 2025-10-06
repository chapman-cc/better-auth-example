"use client";
import { signIn, signOut } from "@/auth-client";

export function SigninGithub() {
  return (
    <button onClick={() => signIn.social({ provider: "github" })}>
      Signin from github
    </button>
  );
}
export function SigninMicrosoft() {
  return (
    <button
      onClick={() => signIn.social({ provider: "microsoft", callbackURL: "/" })}
    >
      Signin from Microsoft
    </button>
  );
}

export function SingoutButton() {
  return <button onClick={() => signOut()}>Signout</button>;
}
