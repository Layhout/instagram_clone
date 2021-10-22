import Image from "next/image"
import { SearchIcon, PlusCircleIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, UserGroupIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid"
import { useSession } from "next-auth/react";

const Header = () => {
    const { data: session } = useSession();

    return (
        <div className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="flex justify-between items-center bg-white max-w-6xl mx-5 lg:mx-auto">
                {/* left */}
                <div className="relative w-24 h-12 hidden lg:inline-block cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>
                <div className="relative h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>

                {/* middle - search bar */}
                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="h-10 w-10 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Header
