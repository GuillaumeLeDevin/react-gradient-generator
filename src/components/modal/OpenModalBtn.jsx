import React from "react";
import { useState } from "react";
import CodeModal from "./CodeModal";
import { createPortal } from "react-dom";

export default function OpenModalBtn() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <button
        onClick={() => setShowModal(!showModal)}
        className="bg-blue-700 py-2 px-6 text-lg rounded-md min-w-[125px] font-semibold hover:bg-blue-600">
        Get the code!
      </button>
      {showModal && (
        createPortal(<CodeModal closeModal={() => setShowModal(!showModal)}/>, document.body)
      )}
    </>
  );
}
