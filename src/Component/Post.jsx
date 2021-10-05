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
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post_header">
                    <div className="post__headerText">
                        <h3>
                            {displayName} {" "}
                            <span className="post__headerSpecial">
                                { verified &&<Verified className="post__batge"/>} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt=""/>
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
