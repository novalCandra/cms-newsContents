import { toast } from "react-toastify";
import { useState, type FormEvent } from "react"
import type { TypeApiReponse, TypeArticleData } from "../types/type.ai";
export const UseHookArticleArtificial = () => {
    const [urlLink, setUrlLink] = useState<string>("")
    const [dataBerita, setData] = useState<TypeArticleData | null>(null);
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
            const response: TypeApiReponse = await request.json();
            setData(response.data)
            toast.success("Success Upload Link")
        } catch (error) {
            setLoading(false)
            toast.error("ERROR UPLOAD LINK")
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
            toast.success("success downlaod data.txt")
        } catch (error) {
            return console.log(error)
        }
    }

    return { setUrlLink, dataBerita, loading, urlLink ,isCopied, handleSubmit, hanldeCopyText, handleDownloadTxt, formatedTextAi }
}