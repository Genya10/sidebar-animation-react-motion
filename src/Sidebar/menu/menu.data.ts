import { IMenuItem } from "../../types/types"
import { Home, Settings,Users, CheckSquare, Award } from 'lucide-react'

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
        icon: Award,
        name:'Achievements',
        link:'/achievements'
     },
    {
        icon: Settings,
        name:'Settings',
        link:'/settings'
     },
]


