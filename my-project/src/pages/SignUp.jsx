import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      
    //    <div className="bg-slate-50 rounded-md">
    //     <form>
    //       <h3 className="text-xl font-medium text-black m-6">Sign In</h3>

    //       <div className="">
    //         <label className="text-sm font-medium text-black m-2">Email id</label>
    //         <input
    //           type="email"
    //           className="form-control rounded-sm m-2"
    //           placeholder="Enter email"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <label className="text-sm font-medium text-black m-2">Password</label>
    //         <input
    //           type="password"
    //           className="form-control rounded-sm m-2    "
    //           placeholder="Enter password"
    //         />
    //       </div>

    //       <div className="mb-3">
    //         <div className="custom-control custom-checkbox">
    //           <input
    //             type="checkbox"
    //             className="custom-control-input border-2"
    //             id="customCheck1"
    //           />
    //           <label className="custom-control-label text-sm font-medium text-black m-2" htmlFor="customCheck1">
    //             Remember me
    //           </label>
    //         </div>
    //       </div>

    //       <div className="d-grid">
    //         <button type="submit" className="btn btn-primary text-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-pink-500 hover:to-yellow-500">
    //           Submit
    //         </button>
    //       </div>
    //       <p className="forgot-password text-sm font-medium text-black m-2">
    //         Forgot <a href="#">password?</a>
    //       </p>
    //     </form>
    //   </div>




        <div className="">
          <form>
            <div className="bg-slate-50 rounded-md">
              <h3 className="text-xl font-medium text-black m-6">Sign Up</h3>

              <div className="">
                <label className="text-sm font-medium text-black m-2">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control rounded-sm m-2"
                  placeholder="First name"
                />
              </div>

              <div className="">
                <label className="text-sm font-medium text-black m-2">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control rounded-sm m-2"
                  placeholder="Last name"
                />
              </div>

              <div className="">
                <label className="text-sm font-medium text-black m-2">
                  Email id
                </label>
                <input
                  type="email"
                  className="form-control rounded-sm m-2"
                  placeholder="Enter email"
                />
              </div>

              <div className="">
                <label className="text-sm font-medium text-black m-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-sm m-2"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary text-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-pink-500 hover:to-yellow-500  ">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-sm font-medium text-black m-2 ">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </div>
          </form>
        </div>
      
    );
  }
}
