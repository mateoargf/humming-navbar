import React from 'react';

import {
     Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";
import { NavBarUILogo } from './NavBarLogo';
import { NavBarRoots } from './NavBarRoots';

const HummingLogo = () => {
     return (
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
               <path
                    clipRule="evenodd"
                    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                    fill="currentColor"
                    fillRule="evenodd"
               />
          </svg>
     );
};

const MainNavBar = () => {
     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

     const menuItems = [
          "Profile",
          "Dashboard",
          "Activity",
          "Analytics",
          "System",
          "Deployments",
          "My Settings",
          "Team Settings",
          "Help & Feedback",
          "Log Out",
     ];
     return (
          <Navbar isBordered>
               <NavBarUILogo/>
               <NavBarRoots/>
               <NavbarMenu>
                    {menuItems.map((item, index) => (
                         <NavbarMenuItem key={`${item}-${index}`}>
                              <Link
                                   className="w-full"
                                   color={
                                        index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                   }
                                   href="#"
                                   size="lg"
                              >
                                   {item}
                              </Link>
                         </NavbarMenuItem>
                    ))}
               </NavbarMenu>
               <NavbarContent className="sm:hidden" justify="end">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
               </NavbarContent>
          </Navbar>
     );
}

export { MainNavBar, HummingLogo };
