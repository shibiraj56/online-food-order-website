import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
  } from "@mui/icons-material";
  import React, { useEffect } from "react";
  import { useStateValue } from "./StateProvider";
  
  function Header() {
    const [{ cart }, dispatch] = useStateValue();
  
    useEffect(() => {
      const toggleIcon = document.querySelector(".toggleMenu");
      toggleIcon.addEventListener("click", () => {
        document.querySelector(".rightMenu").classList.toggle("active");
      });
    }, []);
  
    return (
      <header>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
          alt=""
          className="logo"
        />
  
        <div className="inputBox">
          <SearchRounded className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
  
        <div className="shoppingCart">
          <ShoppingCartRounded className="cart" />
          <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
            <p>{cart ? cart.length : ""}</p>
          </div>
        </div>
  
        <div className="profileContainer">
          <div className="imgBox">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-f01b6.appspot.com/o/Images%2Fsr22.png?alt=media&token=8be8542a-4fef-4414-aa55-afb842c9e33e"
              alt=""
            />
          </div>
          <h2 className="userName">SHIBI RAJ S</h2>
        </div>
  
        <div className="toggleMenu">
          <BarChart className="toggleIcon" />
        </div>
      </header>
    );
  }
  
  export default Header;