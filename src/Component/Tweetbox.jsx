import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './Tweetbox.css'
export default function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://miro.medium.com/fit/c/262/262/1*y0RL_nWltq-gkiJwEUjwHA.jpeg"/>
                    <input placeholder="What's happening?" type="text"/>
                    {/* <input placeholder="" type="text"/> */}
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}
