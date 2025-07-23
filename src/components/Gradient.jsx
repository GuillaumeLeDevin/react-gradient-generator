import React from 'react'
import getGradientCSSValues from "../components/utils/getGradientCSSValue"

export default function Gradient({gradient}) {
  return (
    <div
    style={{backgroundImage: `${getGradientCSSValues(gradient).slice(0, -1)}`}}
    className="w-1/2 border-4 border-slate-200">

    </div>
  )
}
