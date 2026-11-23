import ImageLogo from "../assets/icons/logo.png"

function NavbarAuth() {
    return (
        <div className='flex flex-row justify-between items-center bg-conic px-8 py-4 md:px-20 lg:px-28 md:py-4 bg-white border-b-2 border-black'>
            <div className='flex flex-row items-center space-x-2 '>
                <div className="rounded-sm border-2 border-black shadow-level-1 bg-primary">
                    <img src={ImageLogo} alt="fotoLogo" className="w-10 h-10" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-headline-lg-mobile sm:text-headline-sm md:text-headline-lg lg:text-headline-md font-sans'>NewsTo<span className="text-primary">Content</span></h1>
                </div>
            </div>
            <ul className="flex flex-row gap-x-8">
                <li className="hidden md:block font-sans text-amber-950 font-bold">Creator Studio</li>
                <li className="font-sans  font-bold">Help</li>
            </ul>
        </div>
    )
}

export default NavbarAuth
