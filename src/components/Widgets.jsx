import TrendingTag from "./TrendingTag";
import { generateMockTrendingTopics } from "../data/mockTrendingTweets";
import { useState } from "react";
import { generateMockFollowingBar } from "../data/mockFollowingBar"
import FollowingBar from "./FollowingBar";


// components/Widgets.jsx
export default function Widgets() {

    const [trendingTweets] = useState(() => generateMockTrendingTopics(4));
    const [followingBar] = useState(() => generateMockFollowingBar(3));

    return (
        <div className="third w-full bg-red-5044 hidden md:block">
            <div class="search m-3 top flex p-3 sticky top-0 bg-black z-10">
                <input type="text" class="w-1/2 rounded-full bg-[#16181c] text-white px-4 py-2" placeholder="Search" />
            </div>



            <div class="whats sticky top-0 m-3 border border-gray-800 bg-black w-1/2 py-5 rounded-xl space-y-3">
                <h1 class="text-xl font-bold px-3">Whats Happening</h1>

                {trendingTweets.map((ttw) => (
                    <TrendingTag
                        trending_place={`Trending in ${ttw.trending_place}`}
                        trending_hashtag={ttw.trending_hashtag}
                        post_count={`${ttw.post_count} posts`}
                    />
                ))}

            </div>


            <div class="who sticky top-[50vh] m-3 border border-gray-800 bg-black w-1/2 py-5 rounded-xl space-y-1">
                <h1 class="text-xl font-bold px-3">Who To Follow</h1>

                {followingBar.map((fb) => (
                    <FollowingBar
                        profile_image={fb.profile_image}
                        user_name={fb.user_name}
                        twitter_id={fb.twitter_id}
                    />
                ))}

                <div class="text-blue-600 px-3 cursor-pointer hover:underline my-5">Show More</div>
            </div>

            <div class="terms sticky top-[88vh] m-3 text-xs text-gray-500 px-3  w-1/2 py-5   space-y-1">
                <span class="hover:underline cursor-pointer mr-2">Terms of Service</span>
                <span class="hover:underline cursor-pointer mr-2">Privacy Policy</span>
                <span class="hover:underline cursor-pointer mr-2">Cookie Policy</span>
                <span class="hover:underline cursor-pointer mr-2">Accessibility</span>
                <span class="hover:underline cursor-pointer mr-2">Ads info</span>
                <span class="hover:underline cursor-pointer mr-2">More</span>
                <span class="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
            </div>
        </div>
    );
}
