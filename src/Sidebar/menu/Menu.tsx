import { MENU } from "./menu.data"
import { MenuItem } from "./MenuItem"
import cl from "../Sidebar.module.scss"

export function Menu(){
    return(
        <div className={cl.menu}>
            {MENU.map(item => (
              <MenuItem item={item} key={item.link}/>
            ))}
        </div>
    )
}