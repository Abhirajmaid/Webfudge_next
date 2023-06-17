//# styles
import "./style.css";

//# Next
import Image from "next/image";

//# assets
import Logo from "@public/images/logo.png";

//# components
import NavMenu from "../Menu/NavMenu";

const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Image src={Logo} width={80} height={80} placeholder="blur" />
        </div>
        <div className="menu_section">
          <NavMenu />
        </div>
        <div>
          <button className="cta_btn transition">Get a Quote</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
