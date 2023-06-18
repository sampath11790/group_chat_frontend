import { AuthSliceAction } from "./Authslice";

//url
const signupUrl = `localhost:3000/user/signup`;
const loginUrl = `localhost:3000/user/login`;

//support function

const auth = async (url, obj) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.error) {
    throw new Error();
  }

  return data;
};

//signup
export const Signup = (obj) => {
  return async (Disptach) => {
    try {
      const data = await auth(signupUrl, obj, "signup");
      alert(" successfully registered your account ");

      Disptach(AuthSliceAction.login());
    } catch (error) {
      alert("Please Enter valid data ");
      //   console.log(error.message);
    }
  };
};

export const Login = (obj) => {
  return async (Dispatch) => {
    try {
      const user = await auth(loginUrl, obj, "login");
      alert("login success");
      localStorage.setItem("token", user.Token);
      localStorage.setItem("Login", true);
      // Dispatch(AuthSliceAction.login());
      Dispatch(AuthSliceAction.setAuth({ login: "true", token: user.Token }));
    } catch (error) {
      // console.log(error.message);
      alert("Please Enter valid data ");
    }
  };
};
