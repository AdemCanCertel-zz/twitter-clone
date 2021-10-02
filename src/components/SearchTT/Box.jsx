import { Search, SettingsIcon, Circle } from '../Sidebar/İcons';
export default function AllBox() {
    return(
        <>
        <div className="flex items-center space-x-5 p-3 m-3 rounded-full bg-primary-search_box text-white focus-within:ring-2 focus-within:ring-primary-search_box_color focus:ring-1">
            <Search />
            <div>
                <input className="bg-primary-searchbox focus:outline-none bg-transparent w-full" type="text" placeholder="Search Twitter"/>
            </div>
        </div>
        <div className="items-center p-3 m-3 mt-4 bg-primary-trends_fy_color rounded-xl">
            <div>
                <div className="tfy flex items-center justify-between text-white">
                    <span className="text-xl font-bold">Trends for you</span>
                    <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <SettingsIcon/>
                    </div>
                </div>
                <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Science . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Space
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-white">10.4K Tweets</span>
                </div>
            </div>
            
            <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Football . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #Marsilya
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-white">3.320K Tweets</span>
                </div>
            </div>

            <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Movies & TV . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #LeylaileMecnun
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-white">1.485 Tweets</span>
                </div>
            </div>

            <div className="hover:bg-primary-trends_hover transform transition-colors duration-2 cursor-pointer">
                <div className="">
                    <div className="flex flex-row items-center category_1">
                        <span className="text-sm text-primary-trends_d_color">Cinema and TV . Trending</span>
                        <div className="flex space-x-1 ml-auto tt items-center justify-center w-8 h-8 rounded-full transform transition-colors duration-2 hover:bg-primary-trends_circle_hover hover:bg-opacity-25 cursor-pointer">
                            <Circle/>
                        </div>
                    </div>
                </div>
                <div className="topic">
                    <div className="text-white font-bold">
                        <span>
                            #SquidGames
                        </span>
                    </div>
                </div>
                <div className="TopicCount">
                    <span className="text-white">30K Tweets</span>
                </div>
            </div>
            </div>
        </div>
        <div className="wtf p-3 m-3 flex flex-col rounded-xl mt-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
            <div className="text-white font-bold inline">
                <span className="wtf">Who to follow</span>
            </div>
        <div className="hover:bg-primary-trends_hover">
            <div className="flex flex-row items-center ">
                <div className="px-4 py-3">
                    <img className="rounded-full h-11 w-11" src="https://avatars.githubusercontent.com/u/69676558?s=400&u=b9745d0343d336eebd909869ed57db8136991b8d&v=4" />
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-white">
                        <span>Tom and Jerry</span>
                    </div>
                    <div className="text-primary-gray_colors">
                        @tomandjarry
                    </div>
                </div>
                <div className="flex flex-row ml-auto items-center justify-between rounded-full bg-white px-4 py-1">
                    <span className="font-bold">Follow</span>
                </div>
            </div>
        </div>
        <div className="p-4 transform transition-colors duration-2 bg-primary-wigdets_background_color">
            <span className=" text-primary-button">Show more</span>
        </div>
        </div>
        </>
    )
}