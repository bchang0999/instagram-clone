import React from 'react';
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const posts = [
    {
        id: 123,
        username: "bchang0999",
        userImage: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/142046026_3965695113474701_7469004168786643523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IUjv12bTNQYAX-ldSnT&tn=5jpUsXmFCokz-Gfa&_nc_ht=scontent-lga3-2.xx&oh=00_AT-1DmRYsli9cQOYJQVKDs8Xr3DpekJwA4jpGZXTsyfJ3A&oe=636F37C6",
        img: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/142046026_3965695113474701_7469004168786643523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IUjv12bTNQYAX-ldSnT&tn=5jpUsXmFCokz-Gfa&_nc_ht=scontent-lga3-2.xx&oh=00_AT-1DmRYsli9cQOYJQVKDs8Xr3DpekJwA4jpGZXTsyfJ3A&oe=636F37C6",
        caption: "I miss my babe",

    },
    {
        id: 123,
        username: "bchang0999",
        userImage: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/142046026_3965695113474701_7469004168786643523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IUjv12bTNQYAX-ldSnT&tn=5jpUsXmFCokz-Gfa&_nc_ht=scontent-lga3-2.xx&oh=00_AT-1DmRYsli9cQOYJQVKDs8Xr3DpekJwA4jpGZXTsyfJ3A&oe=636F37C6",
        img: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/142046026_3965695113474701_7469004168786643523_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IUjv12bTNQYAX-ldSnT&tn=5jpUsXmFCokz-Gfa&_nc_ht=scontent-lga3-2.xx&oh=00_AT-1DmRYsli9cQOYJQVKDs8Xr3DpekJwA4jpGZXTsyfJ3A&oe=636F37C6",
        caption: "I miss my babe",

    },

]


function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs);
            }
        );
        return () => {
            unsubcribe();
            };
        }, [db]);


        return (
            <div>
                {posts.map((post) => (
                    <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}
                    />
                ))}
            </div>
        );
    }

export default Posts