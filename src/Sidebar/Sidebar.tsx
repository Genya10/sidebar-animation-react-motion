import { Menu } from "./menu/Menu"
import cl from './Sidebar.module.scss'
import { useState } from "react"
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'

export function Sidebar(){
    const [isCollapsed, setIsCollapsed] = useState(false);

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