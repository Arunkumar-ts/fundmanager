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
            id: 'payments.payments',
            path: path(ROOT_MEMBERS, '/payments'),
            type: NAV_TYPE_ITEM,
            title: 'Payments',
            transKey: 'Payments',
            Icon: WalletIcon,
        },
    ]
}