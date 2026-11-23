import { Link } from "react-router-dom"
// import Google from "../../../public/icon/google.svg"
import { useHooksAuthRegister } from "../../hooks/useHooksAuth";

function RegisterPage() {
    const { fullname, setFullName, email, setEmail, password, setPassword, handleSubmit } = useHooksAuthRegister()
    return (
        <div className="flex flex-col min-h-screen md:h-full justify-center items-center">
            <section className="flex flex-col justify-center items-center text-center bg-gray-100 h-160 md:h-190 w-full rounded-2xl space-y-3.5">
                <section className="w-96 md:w-120 space-y-4 px-4 py-4 md:py-4 md:px-8 ">
                    <h1 className="font-sans text-3xl font-bold">Create your account</h1>
                    <p className="font-sans text-base font-extralight">Start extracting clutter-free news & converting articles into creator-ready formats.</p>
                    {/* <button className="flex flex-row items-center justify-center bg-white border-2 border-black w-full h-12 space-x-2 cursor-pointer">
                        <img src={Google} alt="google" className="h-6" />
                        <p className="font-bold text-base">Sign up with Google</p>
                    </button>

                    <div className="flex flex-row items-center justify-between">
                        <div className="bg-gray-300 w-[40%] md:w-[44%] h-0.5" />
                        <p className="font-sans font-bold text-lg">or</p>
                        <div className="bg-gray-300 w-[40%] md:w-[44%] h-0.5" />
                    </div> */}

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-start">
                        <label htmlFor="fullname" className="font-bold text-sm font-sans">Full name</label>
                        <input type="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)} placeholder="Aulia " className="bg-white border-2 border-black w-full h-10 px-2" />
                        <label htmlFor="email" className="font-bold text-sm font-sans">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" className="bg-white border-2 border-black w-full h-10 px-2" />
                        <div className="flex flex-row justify-between">
                            <label htmlFor="password" className="font-bold text-sm font-sans">Password</label>
                            <Link to={"/password"} className="font-bold text-sm font-sans text-[#4DABFF]" >Forgot password</Link>
                        </div>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*****" className="bg-white border-2 border-black w-full h-10 px-2" />

                        <button type="submit" className="bg-primary font-sans text-base w-full h-10 border-2 border-black font-bold">Sign in with Email</button>

                        <p className="font-sans text-center text-primary-strong">Already have an account? <Link to={"/auth/login"} className="font-bold underline decoration-1 hover:text-primary">Sign in</Link></p>
                    </form>

                    <p className="font-sans text-[12px]">By signing up, you agree to our <Link to={"#"} className="underline decoration-2">Terms of Service</Link> and <Link to={"#"} className="underline decoration-2">Privacy Policy.</Link></p>
                </section>

            </section>
        </div>
    )
}

export default RegisterPage
