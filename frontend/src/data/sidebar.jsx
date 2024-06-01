import { FaHouseUser, FaList, FaLayerGroup, FaCartPlus, } from "react-icons/fa";

const menu = [
  {
    title: "Home",
    icon: <FaHouseUser/>,
    path: "/dashboard",
  },
  {
    title: "Category",
    icon: <FaList/>,
    path: "/add-product",
  },
  {
    title: "Subcategory",
    icon: <FaLayerGroup/>,
    path: '/subcategory'
  },
  {
    title: "Products",
    icon: <FaCartPlus />,
    path: "/products",
  },
];

export default menu;
