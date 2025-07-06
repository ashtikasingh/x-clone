import React from 'react'

const FollowingBar = (props) => {
    return (
        <div class="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
            <div class="flex gap-3">

                <div class="p1"><img class="w-12 h-12 rounded-full"
                    src={props.profile_image}
                    alt="" /></div>
                <div class="p2 ">
                    <div>{props.user_name}</div>
                    <div class="text-gray-500">{props.twitter_id}</div>
                </div>
            </div>

            <div class="p3">
                <button class="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
            </div>

        </div>
    )
}

export default FollowingBar