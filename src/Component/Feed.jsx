import React, { useEffect, useState } from 'react';
import db from '../firebase';
import "./Feed.css";
import Post from './Post';
import Tweetbox from './Tweetbox';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>

            </div>
            <Tweetbox />

            {posts.map(post =>
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />

            )}

        </div>
    )
}
