import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <footer className="bg-white text-gray-600 body-font border-t">
            <div className="container px-5 pt-10 pb-6 mx-auto flex justify-center items-center sm:flex-row flex-col">
                <div className="flex flex-col items-center gap-3">
                    <blockquote className="flex items-center flex-col gap-2 text-lg italic font-semibold text-center text-gray-600 dark:text-white">
                        <p>"Reputation is what people think of you. Character is what you are."</p>
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="pr-3 text-sm font-medium text-gray-600 dark:text-white">Orlando Oxford</cite>
                            <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">- The King's Man</cite>
                        </div>
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <p className="text-md text-gray-500 sm:ml-4 sm:pr-4 sm:py-2 sm:mt-0 mt-4">© 2023 <span className="text-blue-600">Kowshik Kuri</span></p>
                        <span className="inline-flex px-4 sm:py-2 sm:mt-0 mt-4 justify-center gap-3">
                            <a href="https://www.instagram.com/kowshik.kuri" className="text-gray-500 hover:text-rose-600 text-xl" target="_blank" rel="nofollow noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/ratul.kuri" className="text-gray-500 hover:text-blue-600 text-xl" target="_blank" rel="nofollow noreferrer">
                                <FaFacebookSquare />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer