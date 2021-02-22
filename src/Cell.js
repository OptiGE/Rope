import React, { useContext, useState, useEffect } from 'react'

function Cell() {
    const [cellColor, setCellColor] = useState('#e7f2f1');
  
    return (
        <div className="cell" style={{backgroundColor: cellColor}} onMouseDown={(e) => setCellColor("green")} onMouseEnter={(e) => setCellColor("yellow")} onMouseLeave={(e) => setCellColor("purple")} onMouseUp={(e) => setCellColor("red")}>
            &nbsp;
        </div>
    )
}

export default Cell

/*
Solved this problem using similar events between touch and mouse. touchStart/mouseDown or touchEnd/mouseUp. It fires one or another, according to each situation.

touchStart, touchMove, touchEnd, touchEnter, touchLeave, TouchCancel:::: https://stackoverflow.com/questions/27908339/js-touch-equivalent-for-mouseenter

https://stackoverflow.com/questions/48048957/react-long-press-event

Cancelling the touch event sequence:
touchStart
touchEnd
Mousemove
mouseDown
Mouseup
click
https://makandracards.com/makandra/51956-event-order-when-clicking-on-touch-devices
*/