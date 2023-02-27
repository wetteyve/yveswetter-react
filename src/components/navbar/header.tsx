import logo_klein from "../../assets/logos/logo_klein.svg";
import { useHistory } from "react-router-dom";
import MobileNavbar from "./mobile-navbar";

export type NavbarItemType = {
  href: string;
  alternatives?: string[];
  text: string;
};

const Header = () => {
  const history = useHistory();

  const navbarItemsDesktop: NavbarItemType[] = [
    {
      href: "/projects",
      text: "Projects",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  const navbarItemsMobile: NavbarItemType[] = [
    {
      href: "/",
      text: "Home",
    },
    ...navbarItemsDesktop,
    {
      href: "/impressum",
      text: "Impressum",
    },
  ];

  return (
    <div className="shadow-lg bg-white z-20">
      <div className="container mx-auto h-[80px] p-5 flex justify-between">
        <div className="flex">
          <img
            src={logo_klein}
            alt="logo"
            className="w-10 mr-5 hover:cursor-pointer"
            onClick={() => history.push("/")}
          />
        </div>
        <div className="md:flex hidden">
          {navbarItemsDesktop.map((e, i) => (
            <div
              key={i}
              className="my-auto ml-12 hover:cursor-pointer"
              onClick={() => history.push(e.href)}
            >
              <p className="r-text-m font-semibold transition-all ease-in duration-150 hover:scale-105">
                {e.text}
              </p>
            </div>
          ))}
        </div>
        <div className="block md:hidden my-auto">
          <h1 className="r-text-m font-semibold">{"YVESWETTER.CH"}</h1>
        </div>
        <div className="block md:hidden">
          <MobileNavbar items={navbarItemsMobile} />
        </div>
      </div>
    </div>
  );
};

export default Header;
