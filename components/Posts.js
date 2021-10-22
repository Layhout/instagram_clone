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
    return (
        <div>
            {dummy_data.map(post => (
                <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
