import { Copy, Download, Link, Plus } from "lucide-react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col justify-center md:items-center max-w-full px-4 py-6 space-y-4 selection:bg-primary selection:text-white">
        <header className="flex flex-col space-y-2 justify-center text-center relative w-full md:w-180 md:gap-y-2">
          <h1 className="font-sans text-headline-lg-mobile md:text-headline-lg lg:text-headline-xl flex flex-col md:flex-row md:gap-x-1 justify-center items-center">Paste a link. <span className="bg-[#ff5a4f] h-12 md:h-16 flex flex-col items-center justify-center  rounded-sm w-56 md:w-80 border-2 border-black shadow-level-1">Get the story.</span></h1>
          <p className="font-sans text-body-md md:text-body-md xl:text-body-lg font-semibold text-gray-600 text-center selection:bg-primary selection:text-white">Zero clutter, no paywall popups, no AI hallucinations. Server-side structured extraction powered by Mozilla Readability & JSDOM.</p>

          <div className="absolute flex fle-col justify-center items-center font-sans font-bold bg-yellow-400 border-2 border-black rounded-4xl shadow-level-1 w-36 top-0 h-8 -left-16 -rotate-19">DATA ANALIYS</div>
        </header>
        <section className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4 h-46 md:h-48 lg:h-44 bg-white border-2 border-black rounded- shadow-level-2 rounded-md px-2 py-4">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-x-1">
                <Link className="size-4" />
                <h3 className="font-sans font-bold text-[12px]">Enter article URL</h3>
              </div>
              <p className="font-sans text-gray-500 text-[12px]">Supports news, blogs & magazines</p>
            </div>
            <form className="flex flex-col space-y-4">
              <input type="text" name="link" id="link" className="bg-canvas border-2 border-black rounded-sm w-full h-10 px-2 text-black font-sans placeholder:text-black placeholder:font-sans placeholder:font-normal" placeholder="https://www.theverge.com/2024/5/nasa-voyager-1-telemetry-fix" />

              <button type="button" className=" flex w-full h-10 md:h-12
            flex-row items-center justify-center gap-2
          bg-primary
            border-2 border-black
            rounded-sm
            font-sans font-bold
            shadow-level-2
            cursor-pointer
            transition-all duration-150 ease-in-out
            hover:translate-x-0.5
            hover:translate-y-0.5
            hover:shadow-level-1
            active:translate-x-[4px]
            active:translate-y-[4px]
            active:shadow-none">
                <Plus />
                <p>Extract Website Url</p>
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-180 h-120 md:h-128 lg:h-107 bg-white border-2 border-black rounded- shadow-level-2 rounded-md px-2 py-4 md:px-4 md:py-6">
            <h2 className="font-sans text-headline-sm md:text-headline-md">Magnetically Confined Fusion Experiment Sets New High-Temperature Duration Benchmark</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 space-y-2">
              <div className="bg-blue-500 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">arstechnica.com</div>
              <div className="bg-green-500 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">By John Timmer</div>
              <div className="bg-yellow-400 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">940 words</div>
              <div className="bg-primary border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">4 min read</div>
            </div>

            <div className="border-2 border-black font-sans font-black px-2 py-2 h-64 rounded-sm" >
            </div>

            <hr className="text-gray-200 " />
            <div className="flex flex-row justify-center items-center gap-x-4">
              <button className="bg-black text-white font-sans font-bold h-10 w-48 rounded-sm flex flex-row items-center justify-center  
              shadow-level-2
              cursor-pointer gap-x-2
              border-2 border-blacks
              transition-all duration-150 ease-in-out
              hover:translate-x-0.5
              hover:translate-y-0.5
              hover:shadow-level-1
              active:translate-x-[4px]
              active:translate-y-[4px]
              active:shadow-level-0
              border-none
              "><Copy />Copy clean Text</button>
              <button className="bg-white text-black font-sans font-bold h-10 w-48 rounded-sm flex flex-row items-center justify-center gap-x-2 border-2 border-black
              shadow-level-2
              cursor-pointer
              transition-all duration-150 ease-in-out
              hover:translate-x-0.5
              hover:translate-y-0.5
              hover:shadow-level-1
              active:translate-x-[4px]
              active:translate-y-[4px]
              active:shadow-level-0
              "><Download /> Export.txt</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
