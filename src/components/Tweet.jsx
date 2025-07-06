const Tweet = (props) => {
    return (
        <div className="post post border-t-[0.5px] border-y-gray-500 border-x-0">
            <div className="flex">
                <div className="image m-4">
                    <img className="w-16 rounded-full"
                        src={props.profile_image}
                        alt="" />
                </div>
                <div className="content my-3">
                    <span className="font-bold hover:underline cursor-pointer text-white">{props.user_name}</span> <span
                        className="text-gray-500">{props.twitter_id} · {props.timestamp} </span>
                    <div>{props.tweet}</div>
                    <div className="postimg m-4 ml-0">
                        <img className="rounded-xl"
                            src={props.tweet_image} alt="" />
                    </div>
                    <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
                        <div
                            className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                            <span className="material-symbols-outlined">
                                chat_bubble
                            </span> {props.comments}
                        </div>
                        <div
                            className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                            <span className="material-symbols-outlined">
                                repeat
                            </span> {props.retweets}
                        </div>
                        <div
                            className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                            <span className="material-symbols-outlined">
                                Favorite
                            </span> {props.likes}
                        </div>
                        <div
                            className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
                            <span className="material-symbols-outlined">
                                bar_chart
                            </span> {props.insights}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tweet


