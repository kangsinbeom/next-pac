"use client";

import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

interface Props {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

const Signin: React.FC<Props> = ({ providers, callbackUrl }) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          onClick={() => signIn(id, { callbackUrl })}
          text={`Sign In with ${name}`}
          key={id}
          size="large"
        />
      ))}
    </>
  );
};

export default Signin;
