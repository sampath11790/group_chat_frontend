import { AuthSliceAction } from "./Authslice";

//url
const signupUrl = `http://localhost:3001/user/signup`;
const loginUrl = `http://localhost:3001/user/login`;

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
  console.log(data);
  if (data.error) {
    throw new Error();
  }

  return data;
};

//signup
export const Signup = (obj) => {
  return async (Disptach) => {
    try {
      // console.log(obj);
      const data = await auth(signupUrl, obj);
      alert(" successfully registered your account ");

      Disptach(AuthSliceAction.login());
    } catch (error) {
      alert("Please Enter valid data to signup");
      //   console.log(error.message);
    }
  };
};

export const Login = (obj) => {
  return async (Dispatch) => {
    try {
      const user = await auth(loginUrl, obj, "login");
      alert("login success");
      localStorage.setItem("token", user.token);
      localStorage.setItem("login", true);
      localStorage.setItem("name", user.name);
      // Dispatch(AuthSliceAction.login());
      Dispatch(AuthSliceAction.setAuth({ login: "true", token: user.token }));
    } catch (error) {
      // console.log(error.message);
      alert("Please Enter valid data ");
    }
  };
};
