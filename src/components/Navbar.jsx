import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotificationLine } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type='button'
                onClick={customFunc}
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span style={{ background: dotColor }}>
                    {icon}
                </span>
            </button>
        </TooltipComponent>
    )
}

const Navbar = () => {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
    const handleActiveMenu = () => setActiveMenu(!activeMenu);
    return (
        <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

            <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
            <div className="flex"></div>

        </div>
    )
}

export default Navbar