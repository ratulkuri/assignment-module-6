import { useState } from "react"

const Content = () => {
    const [displayText, setDisplayText] = useState("")
    const [inputText, setInputText] = useState("")

    const handleTextareaChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayText(inputText);
    }

    const handleReset = (e) => {
        e.preventDefault();
        setDisplayText("");
        setInputText("");
    }

    return (
        <>
            <div className="pt-20 pb-10 sm:pb-32 bg-slate-100 w-full min-h-[calc(100vh_-_239px)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl px-2 pt-10 sm:pt-32 pb-6 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="relative z-0 w-full mb-6 group mt-6">
                                <textarea onChange={handleTextareaChange} type="email" name="content" id="content" className="block min-h-[60px] py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={inputText} required></textarea>
                                <label htmlFor="content" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:left-3 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">
                                    Type your content
                                </label>
                            </div>
                            <div className="flex justify-center gap-4">
                                <button type="submit" className="px-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">{displayText ? "Update" : "Submit"}</button>
                                {
                                    !!displayText &&
                                    <button onClick={handleReset} className="px-5 block text-blue-800 bg-white border border-blue-800 hover:ring-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase">Reset</button>
                                }
                            </div>
                        </form>
                    </div>
                    {
                        !!displayText &&
                        <>
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
                        <figure className="max-w-screen-md mx-auto text-center">
                            <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                            </svg>
                            <blockquote>
                                <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                                    {displayText}
                                </p>
                            </blockquote>
                        </figure>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Content