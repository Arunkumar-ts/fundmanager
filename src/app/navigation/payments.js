import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'
const ROOT_MEMBERS = '/payments'
import {  WalletIcon  } from "@heroicons/react/20/solid";


const path = (root, item) => `${root}${item}`;

export const payments = {
    id: 'payments',
    type: NAV_TYPE_ROOT,
    path: '/payments',
    title: 'Payments',
    transKey: 'Payments',
    Icon: WalletIcon,
    childs: [
        {
            id: 'payments.home',
            path: path(ROOT_MEMBERS, '/home'),
            type: NAV_TYPE_ITEM,
            title: 'Home',
            transKey: 'Home',
            Icon: WalletIcon,
        },
        {
            id:'payments.payments1',
            path: path(ROOT_MEMBERS, "/payments1"),
            type: NAV_TYPE_ITEM,
            title: "Payments1",
            transKey: "Payments1",
            Icon: WalletIcon,
        },
        {
            id:'payments.payments2',
            path: path(ROOT_MEMBERS, "/payments2"),
            type: NAV_TYPE_ITEM,
            title: "Payments2",
            transKey: "Payments2",
            Icon: WalletIcon,
        }
    ]
}