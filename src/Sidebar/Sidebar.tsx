import { Menu } from "./menu/Menu"
import cl from './Sidebar.module.scss'

export function Sidebar(){
    return (
        <aside className={cl.sidebar}>
            <Menu />
        </aside>
    )
}