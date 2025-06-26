import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'
const ROOT_MEMBERS = '/reports'
import {  ChartBarIcon  } from "@heroicons/react/24/outline";


const path = (root, item) => `${root}${item}`;

export const reports = {
    id: 'reports',
    type: NAV_TYPE_ROOT,
    path: '/reports',
    title: 'Reports',
    transKey: 'Reports',
    Icon: ChartBarIcon,
    childs: [
        {
            id: 'reports.home',
            path: path(ROOT_MEMBERS, '/home'),
            type: NAV_TYPE_ITEM,
            title: 'Home',
            transKey: 'Home',
            Icon: ChartBarIcon,
        },
    ]
}