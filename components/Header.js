import React from 'react'
import { Bars3Icon, MagnifyingGlassIcon, PaperAirplaneIcon, PlusCircleIcon, UserGroupIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"



function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <header className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between p-2 max-w-6xl mx-5 xl:mx-auto">
                <div
                    className="hidden relative w-24 lg:inline-grid cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <img
                        src="https://links.papareact.com/ocw"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div
                    className="relative w-10 flex-shrink-0 lg:hidden cursor-pointer"
                    onClick={() => router.push("/")}
                >
                    <img
                        src="https://links.papareact.com/jjm"
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                <div className="max-w-xs">
                    <div className="mt-1 p-3 relative rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            type="text"
                            className="bg-gray-50 focus:ring-black focus:border-black block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" onClick={() => router.push("/")} />

                    <Bars3Icon className="h-6 md:hidden cursor-pointer" />

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn -rotate-45" />
                                <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse">
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon
                                className="h-6 cursor-pointer navBtn"
                                onClick={() => setOpen(true)}
                            />

                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />
                            <img
                                onClick={signOut}
                                className="cursor-pointer rounded-full h-10 w-10"
                                src={session.user.image}
                                alt=""
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign In</button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;