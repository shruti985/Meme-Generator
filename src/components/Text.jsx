import React, { useState } from 'react'
import Draggable from "react-draggable";
import Input from './Input'
function Text() {
    const [write,setWrite]=useState(false)
    const [val, setVal] = useState("Double click to edit");
  return (
    <Draggable>
      <div onDoubleClick={() => setWrite(!write)}>
        <h4>
          {write ? (
            <Input val={val} setVal={setVal} />
          ) : (
            <div style={{ cursor: "move" }}>{val}</div>
          )}
        </h4>
      </div>
    </Draggable>
  );
}

export default Text