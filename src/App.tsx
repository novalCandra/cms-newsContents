import { Copy, Download, Link, Plus } from "lucide-react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { useState, type FormEvent } from "react"

interface ArticleData {
  summary: string;
  keyPoints: string[];
  instagram: {
    hook: string;
    caption: string;
    hashtags: string[];
  };
  tiktok: {
    hook: string;
    script: string;
    onScreenText: string[];
  };
}

interface ApiReponse {
  status: boolean;
  data: ArticleData
}
function App() {
  const [urlLink, setUrlLink] = useState<string>("")
  const [dataBerita, setData] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    setLoading(true)
    e.preventDefault()
    try {
      const request = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: urlLink
        })
      })

      setLoading(false)
      const response: ApiReponse = await request.json();
      setData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const formatedTextAi = dataBerita?.keyPoints ? dataBerita.keyPoints.join("\n") : "";


  const hanldeCopyText = async () => {
    if (!formatedTextAi.trim()) return;
    try {
      await navigator.clipboard.writeText(formatedTextAi);
      setIsCopied(true)

      setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    } catch (error) {
      return console.log(error)
    }
  }

  const handleDownloadTxt = async () => {
    try {
      const blob = new Blob([formatedTextAi], { type: "text/plain;charset=utf-8" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "ringkasan-berita.txt";
      document.body.appendChild(link);
      link.click()
    } catch (error) {
      return console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <div className="container flex flex-col justify-center md:items-center max-w-full px-4 py-6 space-y-4 selection:bg-primary selection:text-white">
        <header className="flex flex-col space-y-2 justify-center text-center relative w-full md:w-180 md:gap-y-2">
          <h1 className="font-sans text-headline-lg-mobile md:text-headline-lg lg:text-headline-xl flex flex-col md:flex-row md:gap-x-1 justify-center items-center">Paste a link. <span className="bg-[#ff5a4f] h-12 md:h-16 flex flex-col items-center justify-center  rounded-sm w-56 md:w-80 border-2 border-black shadow-level-1">Get the story.</span></h1>
          <p className="font-sans text-body-md md:text-body-md xl:text-body-lg font-semibold text-gray-600 text-center selection:bg-primary selection:text-white">Zero clutter, no paywall popups, no AI hallucinations. Server-side structured extraction powered by Mozilla Readability & JSDOM.</p>

          <div className="absolute hidden md:flex md:flex-col justify-center items-center font-sans font-bold bg-yellow-400 border-2 border-black rounded-4xl shadow-level-1 w-48 top-2 h-8 -left-28 -rotate-19">DATA COPYWRITING</div>
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
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input type="text" name="urlLink" id="urlLink" value={urlLink} onChange={(e) => setUrlLink(e.target.value)} className="bg-canvas border-2 border-black rounded-sm w-full h-10 px-2 text-black font-sans placeholder:text-black placeholder:font-sans placeholder:font-normal" placeholder="https://www.theverge.com/2024/5/nasa-voyager-1-telemetry-fix" />
              <button disabled={loading} type="submit" className=" flex w-full h-10 md:h-12
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
            active:shadow-none
            disabled:opacity-75
            disabled:shadow-level-0
            disabled:cursor-not-allowed
            disabled:translate-x-0
            disabled:translate-y-0
            ">
                <Plus />
                <p>Extract Website Url</p>
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-4 w-full md:w-180 h-120 md:h-140 lg:h-100 bg-white border-2 border-black rounded- shadow-level-2 rounded-md px-2 py-4 md:px-4 md:py-6">
            <h2 className="font-sans text-headline-sm md:text-headline-md lg:text-headline-sm">{dataBerita?.summary ?? "Summary of the latest news from Indonesia and abroad"}</h2>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 space-y-2">
              <div className="bg-blue-500 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">arstechnica.com</div>
              <div className="bg-green-500 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">By John Timmer</div>
              <div className="bg-yellow-400 border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">940 words</div>
              <div className="bg-primary border-2 border-black w-40 text-center rounded-2xl shadow-level-1 font-sans font-bold h-8 flex flex-col justify-center">4 min read</div>
            </div> */}

            <textarea className="border-2 border-black font-sans font-black px-2 py-2 h-64 md:h-100 rounded-sm scrollbar scrollbar-thumb-primary overflow-auto resize-none "
              readOnly
              placeholder="Rangkuman Content News"
              value={formatedTextAi}
            />


            <hr className="text-gray-200 " />
            <div className="flex flex-row justify-center items-center gap-x-4">
              <button type="button" onClick={hanldeCopyText} disabled={!formatedTextAi.trim()} className="bg-black text-white font-sans font-bold h-10 w-48 rounded-sm flex flex-row items-center justify-center  
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
              "><Copy />{isCopied ? "Success Copy" : "Copy clean Text"}</button>
              <button type="button" onClick={handleDownloadTxt} disabled={loading} className="bg-white text-black font-sans font-bold h-10 w-48 rounded-sm flex flex-row items-center justify-center gap-x-2 border-2 border-black
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
