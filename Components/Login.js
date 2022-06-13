import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <button
        className="px-10 bg-blue-400 py-2 rounded-md text-white"
        onClick={signIn}
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;
