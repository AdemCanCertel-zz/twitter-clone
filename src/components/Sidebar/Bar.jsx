import React from 'react';
import { TwitterIcon, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookMarksIcon, ListIcon, ProfileIcon, MoreIcon } from './İcons';

export default function SideBar() {
    return (
        <>

        <div className="flex flex-col w-275 justify-between px-3 bg-black">
            <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-2 hover:bg-primary-twıtter_ıcon hover:bg-opacity-70 mt-1 mb-5 cursor-pointer">
                    <TwitterIcon/>
                </div>
                <nav className="mb-5">
                    <ul>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <HomeIcon/>
                            <li className="ml-4 font-bold">Home</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <ExploreIcon/>
                            <li className="ml-4 font-bold">Explore</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <NotificationsIcon/>
                            <li className="ml-4 font-bold">Notification</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <MessagesIcon/>
                            <li className="ml-4 font-bold">Messages</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <BookMarksIcon/>
                            <li className="ml-4 font-bold">Bookmarks</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <ListIcon/>
                            <li className="ml-4 font-bold">Lists</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <ProfileIcon/>
                            <li className="ml-4 font-bold">Profile</li>
                        </div>
                        </a>
                        <a href="">
                        <div className="flex items-center hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2">
                            <MoreIcon/>
                            <li className="ml-4 font-bold">More</li>
                        </div>
                        </a>
                    </ul>
                </nav>
                <button className="bg-primary-button text-white rounded-full shadow-lg py-3 px-8 w-90 transform transition-colors duration-500 hover:bg-primary-button_hover">
                    Tweet
                </button>
            </div>
            <div className="flex justify-between items-center mb-7 hover:bg-primary-navi_hover hover:bg-opacity-70 rounded-full pl-3 pr-8 py-3 transform transition-colors duration-2"> 
                <div className="h-11 w-11">
                    <img className="rounded-full" src="https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg"/>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-md text-white">AdemCan Certel</span>
                    <span className="text-primary-profile_color text-sm">@CertelAdemcan</span>
                </div>

                <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"/>
                    <div className="w-1 h-1 bg-white rounded-full"/>
                    <div className="w-1 h-1 bg-white rounded-full"/>
                </div>
            </div>
        </div>
        </>
    )
}