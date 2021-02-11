import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as VscIcons from 'react-icons/vsc';


export const SidebarData = [

    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <RiIcons.RiDashboardLine />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },




    {
        title: 'Profile',
        path: '/profile',
        icon: <VscIcons.VscAccount />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },


    {
        title: 'Transfer Money',
        path: '/transfermoney',
        icon: <FcIcons.FcMoneyTransfer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },





    {
        title: 'Checking',
        path: '#',
        icon: <FaIcons.FaMoneyCheckAlt />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/checking',
                icon: <BiIcons.BiMessageAltDetail />,
            },

        ]
    },






    {
        title: 'Savings',
        path: '#',
        icon: <GiIcons.GiPiggyBank />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/savings',
                icon: <BiIcons.BiMessageAltDetail />,
            },

        ]
    },







    {
        title: 'CD',
        path: '#',
        icon: <RiIcons.RiSafeLine />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/cdaccount',
                icon: <BiIcons.BiMessageAltDetail />,
            },

        ]
    },





    {
        title: 'IRA',
        path: '#',
        icon: <AiIcons.AiOutlineSafetyCertificate />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Transactions Details',
                path: '/iraaccount',
                icon: <BiIcons.BiMessageAltDetail />,
            },

        ]
    },







    {
        title: 'LOGOUT',
        path: '/logout',
        icon: <IoIcons.IoMdLogOut />,
            }

        ];
    










