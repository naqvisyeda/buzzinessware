import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

function Header() {
  const [session, loading] = useSession();
  return (
    <div className="flex items-center justify-between px-10 py-4 shadow-sm mb-5">
      {/**logo*/}

      <div>
        <h2 className="text-2xl font-extrabold text-black cursor-pointer">
          Buzzinessware
        </h2>
      </div>

      {/**menu */}

      <div className="flex-grow ml-5 ">
        <nav className="flex space-x-4 ml-2">
          <a className="text-sm font-small" href="/link1">
            Link1
          </a>

          <a className="text-sm font-small" href="/link2">
            Link2
          </a>

          <a className="text-sm font-small" href="/link3">
            Link3
          </a>
        </nav>
      </div>
      {/**Right menu */}
      <div>
        {/* {!session && (
          // <Link href="/signin" onClick={() => signIn()}>
          //   <a className="bw-button"> Sign in</a>
          // </Link>

          <button className="bw-button" onClick={() => signIn()}>
            Sign in
          </button>
        )}
        {session && <button onClick={() => signOut()}>Sign out</button>} */}

        <Link href="/auth">
          <a className="bw-button"> Sign in</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
