const Register = () => {
  return (
    <div className="hero">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 drop-shadow-2xl rounded-none">
        <form className="card-body">
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
              name="name"
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

            <p className="tracking-tighter text-red-500 my-2">
              Error Occured while registering
            </p>
          </div>
          <div className="form-control ">
            <button className="btn btn-primary  rounded-none">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
