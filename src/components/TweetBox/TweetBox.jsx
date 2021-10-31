import { useState , useRef } from 'react'
import { Media, Gif, Survey, Emoji, Plans } from '../Sidebar/İcons';
import db from '../../config/modules/firebase'


export default function TweetBox() {
    const [content, setContent] = useState("");
    const sendTweet = () => {
      if (content !== "") {
        db.collection("feed").add({
          displayName: "AdemCan Certel",
          username: "@CertelAdemCan",
          content,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          avatar:
            "https://pbs.twimg.com/profile_images/1373343596150132738/j8K08iHu_400x400.jpg",
        });
  
        setContent("");
      }
    };
    return(
        <>
        <div className="flex flex-1 flex-col mt-2 text-white">
               <textarea type="text" onChange={(e) => setContent(e.target.value)} value={content} className="bg-black tweet-box w-full outline-none overflow-hidden flex-1 rounded-xl text-xl p-1 resize-none" placeholder="What's happening?"/>
               <div className="items-center flex justify-between">
                   <div className="flex items-center justify-center">
                    <input data-v-16420b52="" type="file" id="imageInput" accept="image/*" className="file cursor-pointer"/>
                       <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-primary-tweetbox_colors_hover hover:bg-opacity-25 cursor-pointer">
                           <a title="Media">
                               <label for="imageInput">
                               <Media/>
                               </label>
                           </a>
                       </div>
                       <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-primary-tweetbox_colors_hover hover:bg-opacity-25 cursor-pointer">
                           <a title="Gif">
                               <Gif/>
                           </a>
                       </div>
                       <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-primary-tweetbox_colors_hover hover:bg-opacity-25 cursor-pointer">
                           <a title="Survery">
                               <Survey/>
                           </a>
                       </div>
                       <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-primary-tweetbox_colors_hover hover:bg-opacity-25 cursor-pointer">
                           <a className="Emoji">
                                <Emoji/>
                           </a>
                       </div>
                       <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-primary-tweetbox_colors_hover hover:bg-opacity-25 cursor-pointer">
                           <a className="Plan">
                               <Plans/>
                           </a>
                       </div>
                   </div>
                   <div className="bg-primary-button text-white rounded-full shadow-lg justify-center py-2 px-4 transform transition-colors duration-500 hover:bg-primary-button_hover">
                   <button className="button-tweet font-bold" onClick={sendTweet}>Tweet</button>
                   </div>
               </div>
        </div>
     </>
    )
}