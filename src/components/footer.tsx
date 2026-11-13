import ImageLogo from "../assets/icons/logo.png"
export default function Footer() {
    return (
        <footer className="flex flex-col space-y-1 justify-center border-t-2 border-black bg-white h-14 md:h-17.5">
            <div className="flex flex-row items-center justify-center">
                <img src={ImageLogo} alt="fotoLogo" className="w-10 h-10" />
                <p className="font-sans text-label-md">NewsToContent — Ideas in. Action out.</p>
            </div>
        </footer>
    )
}
