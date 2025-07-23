import React from "react";

export default function CodeModal({ closeModal }) {
  return (
    <div
    onClick={closeModal}
    className="fixed z-10 bg-slate-800/95 h-full w-full top-0 left-0 flex justify-center items-center">
      <div
      onClick={e => e.stopPropagation()}
      className="bg-slate-50 max-w-[500px] p-7 rounded relative">
        <div className="flex items-center mb-5">
          <p className="font-semibold text-gray-950 mr-6">Here is your code 🎉</p>
          <button className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded">
            Copy
          </button>
          <button
          onClick={closeModal}
          className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
            Close
          </button>
        </div>
        <p className="rounded bg-gray-900 p-5 text-gray-200 font-semibold">
            //Le code
        </p>
      </div>
    </div>
  );
}
