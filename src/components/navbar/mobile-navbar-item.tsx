import { Link } from "react-router-dom";

type MobileNavbarItemProps = {
  href: string;
  alternatives?: string[];
  text: string;
  onClick?: () => void;
};

const MobileNavbarItem = (props: MobileNavbarItemProps) => {
  //todo pathname über hook holen
  const pathName = "";

  return (
    <Link
      className={`w-full whitespace-nowrap px-4 py-4 text-center text-lg text-white ${
        pathName === props.href ||
        (pathName && props.alternatives?.includes(pathName))
          ? "text-accent"
          : ""
      }`}
      to={props.href}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  );
};

export default MobileNavbarItem;
