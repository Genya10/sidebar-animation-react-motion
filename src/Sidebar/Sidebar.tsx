import { Menu } from "./menu/Menu"
import cl from './Sidebar.module.scss'
import { useAtom } from "jotai/react";
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { isCollapsedAtom } from "../store";

export function Sidebar(){
    const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <aside className={cl.sidebar}>
            <button 
              className = {cl.toggle}
              onClick = {toggleSidebar}>
            {isCollapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}
            </button>
            <Menu />
        </aside>
    )
}