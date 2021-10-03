import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './Tweetbox.css'
export default function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://miro.medium.com/fit/c/262/262/1*y0RL_nWltq-gkiJwEUjwHA.jpeg" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input
                    className="tweetBox__imageInput" 
                    placeholder="Enter image URL" 
                    type="text"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
