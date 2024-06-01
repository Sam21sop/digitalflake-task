import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import { ThreeCircles } from 'react-loader-spinner'


const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      {
        isLoading && <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="red"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      }
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <img
              src="https://media.licdn.com/dms/image/C4D0BAQEMmofeiWD_ow/company-logo_200_200/0/1648038603298/digitalflake_logo?e=2147483647&v=beta&t=HTcF9g707ZRYK4isOxVCfwj_nm0PiGrHnAAQXSL53h4"
              alt="logo"
            />
          </div>

          {/* <h2><strong>Digital</strong>flake</h2> */}
          <h4 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            Welcome to digitalflake admin
          </h4>

          <form onSubmit={login}>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>

          <div style={{ margin: "10px", padding: "10px" }}>
            <Link to="/forgot" style={{ float: "right" }}>Forgot Password</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
