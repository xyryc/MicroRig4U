import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle, signInWithGithub, signInWithTwitter } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success(`Logged in as ${result.user.email}`);
        // clear the form
        e.target.reset();

        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success(`Logged in as ${result.user.email}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success(
          `Logged in as ${result.user.email || result.user.displayName}`
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleTwitterSignIn = () => {
    signInWithTwitter()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success(
          `Logged in ${result.user.email || result.user.displayName}`
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 drop-shadow-2xl rounded-none">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-2xl text-center font-semibold">Log In</h2>
          <button
            onClick={handleTwitterSignIn}
            className="btn btn-outline rounded-none"
            type="button"
          >
            <FaTwitter />
            Twitter
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline rounded-none"
            type="button"
          >
            <FcGoogle />
            Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-outline rounded-none"
            type="button"
          >
            <FaGithub />
            Github
          </button>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered  rounded-none"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text ">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered  rounded-none"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {/* <p className="tracking-tighter text-red-500">
              Error Occured while logging in
            </p> */}
          </div>
          <div className="form-control mt-3">
            <button className="btn bg-blue-500 border-none text-white rounded-none">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
