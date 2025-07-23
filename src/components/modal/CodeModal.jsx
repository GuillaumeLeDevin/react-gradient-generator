import { useEffect } from "react";
import { useSelector } from "react-redux";
import getGradientCSSValues from "../utils/getGradientCSSValue";

export default function CodeModal({ closeModal }) {

    const gradientValue = useSelector(state => state.gradient)
    let runningAnimation = false
    const handleCopy = (e) => {
        if(!runningAnimation){
            e.target.disabled = true
            runningAnimation = true
            e.target.textContent = "Copied!"
            navigator.clipboard.writeText(`background-image:${getGradientCSSValues(gradientValue)}`)
            setTimeout(() => {
                e.target.textContent = "Copy"
                runningAnimation = false
                e.target.disabled = false
            }, 800);

        }
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden"

        return () => document.body.style.overflowY = "visible"
    }, [])

  return (
    <div
    onClick={closeModal}
    className="fixed z-10 bg-slate-800/95 h-full w-full top-0 left-0 flex justify-center items-center select-none">
      <div
      onClick={e => e.stopPropagation()}
      className="bg-slate-50 max-w-[500px] p-7 rounded relative">
        <div className="flex items-center mb-5">
          <p className="font-semibold text-gray-950 mr-6">Here is your code 🎉</p>
          <button
          onClick={handleCopy}
          className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
            Copy
          </button>
          <button
          onClick={closeModal}
          className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Close
          </button>
        </div>
        <p className="rounded bg-gray-900 p-5 text-gray-200 font-semibold">
            {`background-image:${getGradientCSSValues(gradientValue)}`}
        </p>
      </div>
    </div>
  );
}
