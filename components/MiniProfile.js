const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="h-16 w-16 rounded-full border p-[2px]" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold" >hello world</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign out</button>
        </div>
    )
}

export default MiniProfile
