import React from 'react';

import {
     Navbar, NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";

const NavBarRoots = () => {

     return (
          <Navbar>

               <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                         <Link color="foreground" href="#">
                              Features
                         </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                         <Link aria-current="page" href="#">
                              Customers
                         </Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Link color="foreground" href="#">
                              Integrations
                         </Link>
                    </NavbarItem>
               </NavbarContent>
               <NavbarContent justify="center">
                    <NavbarItem className="hidden lg:flex">
                         <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                         <Button as={Link} color="primary" href="#" variant="flat">
                              Sign Up
                         </Button>
                    </NavbarItem>
               </NavbarContent>
          </Navbar>
     );
}

export { NavBarRoots };
