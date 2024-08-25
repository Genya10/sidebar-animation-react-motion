import { IMenuItem } from "../../types/types"

export function MenuItem({item}:{item: IMenuItem}){
    
  return (
    <a href="#" rel="noreferrer noopener" target="_blank">
     <item.icon />
     <span>
        {item.name}
     </span>
    </a>
  )
}

