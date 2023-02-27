import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";
import { NavbarItemType } from "./header";
import MobileNavbarItem from "./mobile-navbar-item";

type MobileNavbarProps = {
  items: NavbarItemType[];
};

const MobileNavbar = (props: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <div className="z-20">
      <div>
        <button
          className={`rounded-full bg-accent p-3 text-white transition-all active:scale-95 bg-black ${
            !isOpen && "shadow-xl"
          } ${isOpen && "text-white"}`}
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <TbX size={16} /> : <TbMenu2 size={16} />}
        </button>
      </div>
      <nav
        style={{
          translate: isOpen ? 0 : "100vw",
          opacity: isOpen ? 1 : 0,
        }}
        className="bg-black fixed top-0 left-0 -z-10 flex h-full w-full flex-col items-center justify-start gap-2 overflow-auto bg-primary-dark p-4 pt-[10vh] transition-all duration-300"
      >
        {props.items.map((e, i) => (
          <MobileNavbarItem
            onClick={() => setIsOpen(false)}
            key={i}
            href={e.href}
            text={e.text}
            alternatives={e.alternatives}
          />
        ))}
      </nav>
    </div>
  );
};

export default MobileNavbar;
