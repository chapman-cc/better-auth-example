"use client";
import { signIn } from "@/auth-client";

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <button onClick={() => signIn.social({ provider: "github" })}>
        Signin from github
      </button>
    </main>
  );
}
