"use client";
import { signIn, signOut } from "@/auth-client";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleSignout = async () => {
    await signOut();
    router.push("/");
  };
  return <button onClick={handleSignout}>Signout</button>;
}
