import Tweet from "./Tweet";
import Composer from "./Composer";
import { generateMockTweets } from "../data/mockTweets.js";
import { useState } from "react";

export default function Feed() {

    const [tweets] = useState(() => generateMockTweets(10));
    return (
        <div className="second w-full border-[1px] border-x-gray-600 border-y-black">
            <div className="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
                <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
                <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
                <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
            </div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <Composer />
            <div className="posts">

                {tweets.map((tw) => (
                    <Tweet
                        key={tw.twitter_id + tw.timestamp}
                        profile_image={tw.profile_image}
                        user_name={tw.user_name}
                        twitter_id={tw.twitter_id}
                        timestamp={tw.timestamp}
                        tweet={tw.tweet}
                        tweet_image={tw.tweet_image}
                        comments={tw.comments}
                        retweets={tw.retweets}
                        likes={tw.likes}
                        insights={tw.insights}
                    />
                ))}
            </div >
        </div>
    );
}
