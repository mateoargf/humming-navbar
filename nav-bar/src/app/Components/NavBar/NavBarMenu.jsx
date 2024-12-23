import React from 'react';

import {
     Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";
import { NavBarUILogo } from './NavBarLogo';
import { NavBarRoots } from './NavBarRoots';


const NavBarUI = () => {
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
          <Navbar>
               <NavBarUILogo />
               <NavBarRoots />
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

export { NavBarUI };
