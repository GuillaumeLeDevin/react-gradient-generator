import Gradient from "./components/Gradient"
import { useSelector } from "react-redux"
import ColorInputs from "./components/inputs/ColorInputs"
import AddRemoveColor from "./components/AddRemoveColor"
import RangeAngle from "./components/inputs/RangeAngle"
import SelectorColor from "./components/inputs/SelectorColor"
import RangeColorPosition from "./components/inputs/RangeColorPosition"
import OpenModalBtn from "./components/modal/OpenModalBtn"

function App() {

  const gradientValues = useSelector( state => state.gradient)
  console.table(gradientValues)
  return (
    <div className="relative text-slate-100 max-w-4xl mx-auto mt-20 p-4 border border-slate-400 flex">
      <div className="w-1/2 p-4 pr-8">
        <h1 className="text-center text-xl">Gradient Generator</h1>
        <p className="text-center mb-6">Bring style to your apps</p>

        <p className="mb-1">Colors (min. 2 and max 5)</p>
        <div className="flex mb-2">
          {gradientValues.colors.map(obj => (
            <ColorInputs id={obj.id} key={obj.id} color={obj.value} />
          ))}
        </div>
        <div className="mb-5">
          <AddRemoveColor text={"-"} action="remove"/>
          <AddRemoveColor text={"+"} action="add"/>
        </div>

        <p>Pick and change a color's position</p>
        <SelectorColor />

        <p>Color's position</p>
        <RangeColorPosition />

        <p>Gradient global angle</p>
        <RangeAngle gradient={gradientValues}/>

        <OpenModalBtn />
      </div>
      <Gradient gradient={gradientValues}/>
        
    </div>
  );
}

export default App;
