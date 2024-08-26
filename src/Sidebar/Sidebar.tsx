import { Menu } from "./menu/Menu"
import cl from './Sidebar.module.scss'
import { useAtom } from "jotai/react";
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { isCollapsedAtom } from "../store"
import { m } from "framer-motion"
import cn from 'clsx'

export function Sidebar(){
    const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <m.aside className={cn(cl.sidebar,{
            [cl.collapsed]: isCollapsed
        })}
           animate={{width: isCollapsed ? 50 : 208}}
           transition={{type:'spring', stiffness: 300, damping:20}}
        >
            <button 
              className = {cl.toggle}
              onClick = {toggleSidebar}>
            {isCollapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}
            </button>
            <Menu />
        </m.aside>
    )
}