import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();
  return (
    <div>
      {/**logo */}
      {/**menu */}
      {/**login button */}
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}

export default Header;
