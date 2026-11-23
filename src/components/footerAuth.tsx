function FooterAuth() {
    const newDate = new Date()
    return (
        <footer className='flex flex-row justify-between bg-white items-center w-full h-20 md:h-24 border-t-2 border-black px-8 md:px-4 md:py-8 '>
            <p className='font-sans font-bold'>&copy; {newDate.getFullYear()} NewsToContent Inc. All rights reserved</p>
            <ul className='hidden md:flex flex-row space-x-2 items-center'>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </footer>
    )
}

export default FooterAuth
