import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase'
import './Tweetbox.css'


export default function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("")
    consot [tweetImage, settweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Prasad",
            username: "Prasad Birari",
            verified: true,
            text: tweetMessage,
            avatar: "https://miro.medium.com/fit/c/262/262/1*y0RL_nWltq-gkiJwEUjwHA.jpeg",
            image: tweetImage
        })
        settweetImage("")
        setTweetMessage("")
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://miro.medium.com/fit/c/262/262/1*y0RL_nWltq-gkiJwEUjwHA.jpeg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type="text"
                        value={tweetMessage}
                    />
                </div>
                <input
                    onChange={(e) => settweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                    value={tweetImage}
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
