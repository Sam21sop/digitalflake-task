import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);
  const [confirmation, setconfirmation] = useState(false)

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/");

  };

  return (
    <>
      {/* header section */}
      <div className="header" style={{ marginTop: 0 }}>
        <div className="--flex-between" style={{ backgroundColor: "purple", padding: '10px' }}>
          <h3 style={{ display: "flex", gap: "10px" }}>
            <img 
              src="https://media.licdn.com/dms/image/C4D0BAQEMmofeiWD_ow/company-logo_200_200/0/1648038603298/digitalflake_logo?e=2147483647&v=beta&t=HTcF9g707ZRYK4isOxVCfwj_nm0PiGrHnAAQXSL53h4" 
              alt="logo" 
              height={40}
              width={40}
              style={{borderRadius:"5%", backdropFilter:"red"}}
            />
            <span style={{ color: "White" }}><b>Digital</b>flake</span>
          </h3>
          {/* <button onClick={logout} className="--btn"> */}
          <button onClick={() => setconfirmation(!confirmation)} className="--btn">
            <img src="https://cdn-icons-png.flaticon.com/128/552/552721.png" alt="logout" height={20} width={20} />
          </button>
        </div>
      </div>

      {
        confirmation &&
        <div style={{ display: "flex",justifyContent:"center", textAlign: "center", height: "200px", flexDirection: "column", borderRadius: '5px', padding: "15px", backgroundColor: 'whitesmoke', boxShadow: "unset", position: "absolute", marginTop: "15%", marginLeft: "50%", width: "400px" }}>
          <h1 style={{ fontSize: 30}}>
            <span style={{padding:"5px"}}>
              <img src="https://cdn-icons-png.flaticon.com/128/3756/3756712.png" alt="warning" height={30} width={30} />
            </span>
            <span tyle={{padding:"5px"}}>
              Log Out
            </span>
          </h1>
          <p>Are you sure you want to log out ?</p>
          <div>
            <button onClick={() => setconfirmation(false)} style={{ backgroundColor: "orange", height: "25px", width: "20%", borderRadius: "5px", padding: "5px", float: "left", margin: "10px" }}>NO</button>
            <button onClick={logout} style={{ backgroundColor: "greenyellow", height: "25px", width: "20%", borderRadius: "5px", padding: "5px", float: "right", margin: "10px" }}>YES</button>

          </div>
        </div>
      }

    </>
  );
};

export default Header;
