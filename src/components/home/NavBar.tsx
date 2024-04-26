import { useMediaQuery } from "@/hooks/UseMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger, DrawerFooter, DrawerClose } from "../ui/drawer";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { Button } from "../ui/button";
import { ArrowUpRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const menuItems = [
        // { id: 1, name: 'Applications', url: '/applications' },
        // { id: 2, name: 'Features', url: '/features' },
        // { id: 3, name: 'Architecture', url: '/architecture' },
        { id: 4, name: 'Litepaper', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4636450' },
        // { id: 5, name: 'Research', url: '/research' },
        // { id: 6, name: 'Docs', url: 'https://docs.temporal.exchange/temporal/v/handbook/' },
    ];

    return (
        <div className="sm:h-[15vh] dark flex justify-between items-center py-4 px-4 md:px-20">
            <div className="flex items-center">
                {isDesktop ? (
                    <Image src="./TemporalLogoComplete.svg" alt="Small Temporal Logo" width={250} height={250} />
                ) : (
                    <Image src="./TemporalLogoWithT.svg" alt="Temporal Logo" width={90} height={90} />
                )}
            </div>

            {isDesktop ? (
                <NavigationMenu>
                    <NavigationMenuList className="gap-4">
                        {menuItems.map((item) => (
                            <NavigationMenuItem key={item.id} className={``}>
                                <Link href={item.url} legacyBehavior passHref>
                                    <NavigationMenuLink className={`flex group/${item.name} hover:text-temporal text-xl items-center`}>
                                        {item.name}
                                        <ArrowUpRight className={`ml-2 opacity-0 group-hover/${item.name}:opacity-100 transition-opacity duration-300`} />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            ) : (
                <div>
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
            )}
        </div>
    );
}