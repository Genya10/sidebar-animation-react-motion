import { IMenuItem } from "../../types/types"
import { Home, Settings,Users, CheckSquare } from 'lucide-react'

export const MENU: IMenuItem[] = [
    {
       icon: Home,
       name:'Home',
       link:'/'
    },
    {
        icon: Users,
        name:'Friends',
        link:'/friends'
     },
     {
        icon: CheckSquare,
        name:'Todo list',
        link:'/todo'
     },
     {
        icon: Home,
        name:'Home',
        link:'/'
     },
    {
        icon: Settings,
        name:'Settings',
        link:'/settings'
     },
]


