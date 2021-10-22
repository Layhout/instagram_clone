import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/Header";

// this part is running on the broswer...
const signin = ({ providers }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
                <img src="https://links.papareact.com/ocw" alt="" className="w-80" />
                <p className="font-xs italic">This is not a real app, it is built for educational purposes only.</p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button onClick={() => signIn(provider.id, { callbackUrl: "/" })} className="bg-blue-500 rounded-lg text-white p-3">
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// this part is running on the next.js server...
export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers
        }
    }
}

export default signin