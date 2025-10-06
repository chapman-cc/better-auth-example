import {
  SigninGithub,
  SigninMicrosoft,
  SingoutButton,
} from "./Buttons";
import { auth } from "../auth";
import { headers } from "next/headers";

export default async function Home() {
  const authenticated = await auth.api.getSession({ headers: await headers() });

  if (authenticated === null) {
    return (
      <main>
        <SigninGithub />
        <br />
        <SigninMicrosoft />
        <br />
      </main>
    );
  }

  return (
    <main>
      <div>Session: </div>
      <ul className="ml-2">
        {Object.entries(authenticated?.session || {}).map(([key, value]) => (
          <li key={key}>
            {key}: {String(value)}
          </li>
        ))}
      </ul>
      <div>User: </div>
      <ul className="m-2">
        {Object.entries(authenticated?.user || {}).map(([key, value]) => (
          <li key={key}>
            {key}: {String(value)}
          </li>
        ))}
      </ul>
      <SingoutButton />
    </main>
  );
}
