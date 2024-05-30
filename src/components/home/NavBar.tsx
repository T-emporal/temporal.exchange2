'use client'

import { Drawer, DrawerContent, DrawerTrigger, DrawerFooter, DrawerClose } from "../ui/drawer";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu"
import { Button } from "../ui/button";
import { ArrowUpRight, MenuIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

export default function NavBar() {

    const currentPage = usePathname();

    const menuItems = [
        // { id: 1, name: 'APPLICATIONS', url: '/applications' },
        // { id: 2, name: 'FEATURES', url: '/features' },
        // { id: 3, name: 'ARCHITECTURE', url: '/architecture' },
        { id: 4, name: 'INFRASTRUCTURE', url: '/infrastructure' },
        // { id: 5, name: 'RESEARCH', url: '/research' },
        // { id: 6, name: 'DOCS', url: 'https://docs.temporal.exchange/temporal/v/handbook/' },
        { id: 7, name: 'LITEPAPER', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4636450' },
    ];

    return (
        <div>
            <div className="sm:h-[15vh] dark flex justify-between items-center py-4 px-4 md:px-20">
                <div className="flex items-center">
                    <Link className="hidden md:flex" href="/">
                        <Image src="./TemporalLogoComplete.svg" alt="Complete Temporal Logo" width={250} height={250} />
                    </Link>
                    <Link className="flex md:hidden" href="/">
                        <Image src="./TemporalLogoWithT.svg" alt="Temporal Logo" width={90} height={90} />
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-4">
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.id} className={` `}>
                                <Link href={item.url} legacyBehavior passHref>
                                    <NavigationMenuLink className={`flex group/${item.id} hover:text-temporal/70 text-xl items-center  ${currentPage === item.url ? 'text-temporal' : ''}`}>
                                        {item.name}
                                        <ArrowUpRight className={`ml-2 opacity-0 group-hover/${item.name}:opacity-100 transition-opacity duration-300`} />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="block md:hidden">
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <MenuIcon className="text-white" />
                        </DrawerTrigger>
                        <DrawerContent className="text-white px-4 pt-12 bg-black gap-6">
                            <span className="text-temporal text-3xl "> Temporal</span>
                            {menuItems.map((item) => (
                                <Link key={item.id} href={item.url} className="text-white text-xl px-4 py-2 hover:text-temporal block">
                                    {item.name}
                                </Link>
                            ))}

                            <DrawerClose asChild >
                                <Button variant="outline" className="bg-black hover:bg-temporal hover:text-black">Close</Button>
                            </DrawerClose>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}