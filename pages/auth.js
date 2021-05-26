import {
  faFacebook,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getProviders, getSession, signIn } from "next-auth/client";

function auth({ providers }) {
  console.log(providers);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 p-10">
        <h2>Login to your account</h2>

        <div className="flex flex-col space-y-4 items-center justify-center">
          <button
            className="bw-login border-gray-400 from-gray-600 to-gray-500 hover:to-gray-700 "
            onClick={() => {
              signIn(providers.google.id);
            }}
          >
            <FontAwesomeIcon icon={faGoogle} className="bw-login-icon" />
            <span> Signin with {providers.google.name}</span>
          </button>

          <button
            className="bw-login border-blue-800 from-blue-800 to-blue-600 hover:to-blue-700"
            onClick={() => {
              signIn(providers.facebook.id);
            }}
          >
            <FontAwesomeIcon icon={faFacebook} className="bw-login-icon" />
            <span> Signin with {providers.facebook.name}</span>
          </button>

          <button
            className="bw-login border-blue-800 from-gray-800 to-gray-600 hover:to-gray-700"
            onClick={() => {
              signIn(providers.github.id);
            }}
          >
            <FontAwesomeIcon icon={faGithub} className="bw-login-icon" />
            <span>Signin with {providers.github.name}</span>
          </button>
        </div>
      </div>

      <div className="col-span-9">
        <h2>Hello</h2>
      </div>
    </div>
  );
}

auth.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res) {
    res.writeHead(302, {
      Location: "/",
    });

    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await getProviders(context),
  };
};

export default auth;
