import { Avatar } from '@material-ui/core'
import { ChatBubbleOutlined, FavoriteBorder, Publish, Repeat } from '@material-ui/icons'
import {  Verified } from '@mui/icons-material'
import React from 'react'
import "./Post.css"
export default function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://miro.medium.com/fit/c/262/262/1*y0RL_nWltq-gkiJwEUjwHA.jpeg" />
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            Narendra Modi {" "}
                            <span className="post__headerSpecial">
                                <Verified className="post__batge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>
                            Lluptas fuga. Tenetur, atque molestiae.
                        </p>
                    </div>
                </div>
                <img src="https://c.tenor.com/g01carZ_O74AAAAM/indian-man-rolls-eyes-funny-gorilla.gif" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlined fontSize="small"/>
                    <Repeat fontSixe="small"/>
                    <FavoriteBorder fontSize="small"/>
                    <Publish fontSize="small"/>
                </div>
            </div>
        </div>
    )
}
