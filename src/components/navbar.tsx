import ImageLogo from "../assets/icons/logo.png"
export default function Navbar() {
    return (
        <div className='flex flex-row justify-between items-center bg-conic px-2 py-2 md:px-20 lg:px-28 md:py-4 bg-white border-b-2 border-black'>
            <div className='flex flex-row items-center space-x-2'>
                <div className="rounded-sm border-2 border-black shadow-level-1">
                    <img src={ImageLogo} alt="fotoLogo" className="w-10 h-10" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-headline-lg-mobile sm:text-headline-sm md:text-headline-lg lg:text-headline-md font-sans'>NewsToContent</h1>
                    <p className="font-sans">News in. Content out.</p>
                </div>
            </div>
        </div>
    )
}
