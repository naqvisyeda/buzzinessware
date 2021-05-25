import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();
  return (
    <div className="flex items-center justify-between px-10">
      {/**logo*/}

      <div>
        <h2 className="text-2xl font-extrabold text-black mt-3 ml-2 cursor-pointer">
          Buzzinessware
        </h2>
      </div>

      {/**menu */}

      <div className="flex-grow ml-10 ">
        <nav className="flex space-x-6 items-end ml-40">
          <a className="text-xl font-small" href="/link1">
            Link1
          </a>

          <a className="text-xl font-small" href="/link2">
            Link2
          </a>

          <a className="text-xl font-small" href="/link3">
            Link3
          </a>
        </nav>
      </div>
      {/**Right menu */}
      <div>
        {!session && (
          <button
            className="bg-green-400 border-0 hover:bg-green-500 hover:text-white px-6 py-4 text-2xl text-white mt-11"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
        {session && <button onClick={() => signOut()}>Sign out</button>}
      </div>
    </div>
  );
}

export default Header;
