import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"

const dummy_data = [
    {
        id: "1",
        username: "Justyn52",
        userImg: "https://cdn.fakercloud.com/avatars/dparrelli_128.jpg",
        img: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
        caption: "hello world"
    },
    {
        id: "2",
        username: "Justyn52",
        userImg: "https://cdn.fakercloud.com/avatars/dparrelli_128.jpg",
        img: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80",
        caption: "hello world"
    },
]

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => onSnapshot(query(collection(db, "posts"), orderBy("timestamp", "desc")), snapshot => {
        setPosts(snapshot.docs);
    }), [db]);

    // same as this
    // useEffect(() => {
    //     const unsubscribe = onSnapshot(query(collection(db, "emails"), orderBy("timestamp", "desc")), snapshot => {
    //         setPosts(snapshot);
    //     });

    //     return unsubscribe;
    // }, [db])

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} img={post.data().image} caption={post.data().caption} />
            ))}
        </div>
    )
}

export default Posts
