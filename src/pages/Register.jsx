import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User registered successfully");
        // clear form
        e.target.reset();

        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 drop-shadow-2xl rounded-none">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-2xl text-center font-semibold">Register</h2>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered  rounded-none"
              required
            />
          </div>
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

            {/* <p className="tracking-tighter text-red-500 mt-2">
              Error Occured while registering
            </p> */}
          </div>
          <div className="form-control mt-3">
            <button className="btn bg-blue-500 border-none text-white rounded-none">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
