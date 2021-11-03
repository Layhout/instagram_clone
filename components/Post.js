import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import { useEffect, useRef, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "@firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption }) => {
    const { data: session } = useSession();
    const [comments, setComments] = useState([]);
    const inputRef = useRef();
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        const unSub = onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), snapshot => {
            setComments(snapshot.docs);
        })

        return () => unSub();
    }, [db, id]);

    useEffect(() => {
        const unSub = onSnapshot(collection(db, "posts", id, "likes"), snapshot => {
            setLikes(snapshot.docs);
        })

        return () => unSub();
    }, [db, id]);

    useEffect(() => {
        setHasLiked(likes.findIndex(l => l.id === session.user.uid) !== -1);
    }, [likes])

    const likePost = async () => {
        if (hasLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
                username: session.user.username,
            });
        }
    }

    const sendComment = async (e) => {
        e.preventDefault();
        setComments("");
        await addDoc(collection(db, "posts", id, "comments"), {
            comment: inputRef.current.value,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* header */}
            <div className="flex items-center p-5">
                <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
            <img src={img} alt="" className="object-cover w-full" />

            {/* button */}
            {session &&
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        {hasLiked ? <HeartIconFilled className="btn text-red-500" onClick={likePost} /> : <HeartIcon className="btn" onClick={likePost} />}
                        <ChatIcon className="btn" />
                        <PaperAirplaneIcon className="btn" />
                    </div>
                    <BookmarkIcon className="btn" />
                </div>
            }


            {/* caption */}
            <div>
                <p className="p-4 truncate">
                    {likes.length > 0 && <p className="font-bold mb-1">{likes.length} likes</p>}
                    <span className="font-bold mr-1">{username}</span> {caption}
                </p>
            </div>

            {/* comments */}
            {comments.length > 0 && <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                {comments.map(c => (
                    <div key={c.id} className="flex items-center space-x-2 mb-3">
                        <img className="h-7 rounded-full" src={c.data().userImage} alt="" />
                        <p className="text-sm flex-1"><span className="font-bold">{c.data().username}</span> {c.data().comment}</p>
                        <Moment fromNow className="pr-5 text-xs">{c.data().timestamp?.toDate()}</Moment>
                    </div>
                ))}
            </div>}

            {/* input box */}
            {session &&
                <form className="flex items-center p-4">
                    <EmojiHappyIcon className="h-7" />
                    <input type="text" ref={inputRef} className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..." />
                    <button className="font-semibold text-blue-400" onClick={sendComment} >Post</button>
                </form>
            }
        </div>
    )
}

export default Post
