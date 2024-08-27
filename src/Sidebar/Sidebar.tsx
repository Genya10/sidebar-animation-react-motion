import { Menu } from "./menu/Menu";
import cl from "./Sidebar.module.scss";
import { useAtom } from "jotai/react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { isCollapsedAtom } from "../store";
import { m } from "framer-motion";
import cn from "clsx";
import { useRef, useState } from "react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const [isCanHover, setIsCanHover] = useState(true);
  const hoverTimeoutRef = useRef<number | null>(null);

  const toggleSidebar = () => {
    if (isCollapsed) {
      setIsCanHover(false);

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      hoverTimeoutRef.current = setTimeout(() => {
        setIsCanHover(true);
      }, 500);
    }
    console.log(isCanHover)
    setIsCollapsed(!isCollapsed);
  };

  return (
    <m.aside
      className={cn(cl.sidebar, {
        [cl.collapsed]: isCollapsed,
        [cl.canHover]: isCanHover,
      })}
      animate={{ width: isCollapsed ? 50 : 208 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <button className={cl.toggle} onClick={toggleSidebar}>
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <Menu />
    </m.aside>
  );
}
