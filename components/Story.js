const Story = ({ img, username }) => {
    return (
        <div className="">
            <img src={img} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition duration-200 ease-out" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    )
}

export default Story