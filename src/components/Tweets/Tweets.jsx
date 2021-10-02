import { Reply, Retweet, Like, Share } from '../Sidebar/İcons';

export default function Tweets(){
    return(
        <>
        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-white">AdemCan Certel</span>
                <span className="ml-2 text-primary-gray_colors">@CertelAdemcan</span>
                <div className="mx-2 text-primary-gray_colors">.</div>
                <span className="text-primary-gray_colors">49m</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-white overflow-hidden">
                        It is necessary to believe that everything we see on the face of the Earth is the work of a woman.
                        - Mustafa Kemal Atatürk -
                        <img className="mt-3 rounded-xl" src="https://imgrosetta.mynet.com.tr/file/11150908/11150908-728xauto.jpg"/>
                    </p>
                    <ul className="flex justify-between mt-1">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>20</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>5</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>9,9K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>2</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>


        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-white">AdemCan Certel</span>
                <span className="ml-2 text-primary-gray_colors">@CertelAdemcan</span>
                <div className="mx-2 text-primary-gray_colors">.</div>
                <span className="text-primary-gray_colors">1h</span>
                </div>
                <div className="ml-1">
                    <p className="items-center text-white overflow-hidden">
                        The end of the road that does not go from science is darkness.
                       - Hacı Bektaş-ı Veli -
                        <img className="mt-3 rounded-xl" src="https://im.haberturk.com/2021/02/06/ver1613138064/2964172_1920x1080.jpg"/>
                    </p>
                    <ul className="flex justify-between mt-1">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>40</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>1</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>7K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex space-x-3 px-4 py-3 border-b border-primary-container_border_color">
            <img src="https://pbs.twimg.com/profile_images/1439646648410464258/C52zZ4ff_400x400.jpg" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm space-x-2">
                <span className="ml-1 font-bold text-white">AdemCan Certel</span>
                <span className="ml-2 text-primary-gray_colors">@CertelAdemcan</span>
                <div className="mx-2 text-primary-gray_colors">.</div>
                <span className="text-primary-gray_colors">2m</span>
                </div>
                <div className="ml-1">
                        <img className="mt-3 rounded-xl" src="https://i.pinimg.com/originals/a1/65/c6/a165c666484b8203e3002851845ee4d0.png"/>
                    <ul className="flex justify-between mt-1">
                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Reply/>
                            </div>
                            <span>40</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors2 cursor-pointer">
                                <Retweet/>
                            </div>
                            <span>10</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors3 cursor-pointer">
                                <Like/>
                            </div>
                            <span>10K</span>
                        </li>

                        <li className="flex items-center space-x-3 text-primary-gray_colors text-sm group">
                            <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 group-hover:bg-primary-tweets_hover_colors1 cursor-pointer">
                                <Share/>
                            </div>
                            <span>8</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}