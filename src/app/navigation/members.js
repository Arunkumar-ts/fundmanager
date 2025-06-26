import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'
const ROOT_MEMBERS = '/members'
import { UserIcon } from "@heroicons/react/20/solid";


const path = (root, item) => `${root}${item}`;

export const members = {
    id: 'members',
    type: NAV_TYPE_ROOT,
    path: '/members',
    title: 'Members',
    transKey: 'Members',
    Icon: UserIcon,
    childs: [
        {
            id: 'members.home',
            path: path(ROOT_MEMBERS, '/home'),
            type: NAV_TYPE_ITEM,
            title: 'Home',
            transKey: 'Home',
            Icon: UserIcon,
        },
        {
            id: 'members.user1',
            path: path(ROOT_MEMBERS, '/user1'),
            type: NAV_TYPE_ITEM,
            title: 'User1',
            transKey: 'User1',
            Icon: UserIcon,
        },
        {
            id: 'members.user2',
            path: path(ROOT_MEMBERS, '/user2'),
            type: NAV_TYPE_ITEM,
            title: 'User2',
            transKey: 'User2',
            Icon: UserIcon,
        },
        
        {
            id: 'members.user3',
            path: path(ROOT_MEMBERS, '/user3'),
            type: NAV_TYPE_ITEM,
            title: 'User3',
            transKey: 'User3',
            Icon: UserIcon,
        },
    ]
}