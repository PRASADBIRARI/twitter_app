import { Search } from '@material-ui/icons'
import React from 'react'
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed"
import "./Widgets.css"
export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <Search className="widget_SearchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1444398958764232712"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="narendramodi"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/prasadpbirari"}
                    options={{ text: "#reactjs is awesome", via: "prasadpbirari" }}
                />
            </div>
        </div>
    )
}
