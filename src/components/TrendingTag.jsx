import React from 'react'

const TrendingTag = (props) => {
    return (
        <div class="item p-3 hover:bg-gray-800 cursor-pointer px-3">
            <div class="text-sm text-gray-200">{props.trending_place}</div>
            <div class="font-bold">{props.trending_hashtag}</div>
            <div class="text-sm text-gray-200">{props.post_count}</div>
        </div>
    )
}

export default TrendingTag


