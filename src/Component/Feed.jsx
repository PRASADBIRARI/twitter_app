import React from 'react'
import "./Feed.css"
import Tweetbox from './Tweetbox'
export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <div>Home</div>

            </div>
            <Tweetbox/>
        </div>
    )
}
