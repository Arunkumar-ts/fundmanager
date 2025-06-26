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
            id: 'members.members',
            path: path(ROOT_MEMBERS, '/members'),
            type: NAV_TYPE_ITEM,
            title: 'Members',
            transKey: 'Members',
            Icon: UserIcon,
        },
    ]
}