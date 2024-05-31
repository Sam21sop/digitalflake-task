import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../../components/product/productList/ProductList";
import ProductSummary from "../../components/product/productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import { getProducts } from "../../redux/features/product/productSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  return (
    <div style={{marginLeft:"25%", marginTop:"4%"}}>
        <img 
          src="https://media.licdn.com/dms/image/C4D0BAQEMmofeiWD_ow/company-logo_200_200/0/1648038603298/digitalflake_logo?e=2147483647&v=beta&t=HTcF9g707ZRYK4isOxVCfwj_nm0PiGrHnAAQXSL53h4" 
          alt="home" 
          width="50%"
          height="50%"
        />

        <h2 style={{backgroundColor:"white", width:"fit-content", padding:"8px"}}>Welcome to Digitalflake admin</h2>
        {/* <ProductList products={products} isLoading={isLoading} /> */}
    </div>
  );
};

export default Dashboard;
