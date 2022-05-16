import { useRef, useReducer, useEffect } from "react";
import { reducer, initialState } from "./Reducer";
import { pan, startPan, zoom } from "./Actions";

export const usePanAndZoom = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef(null);
  const onMouseMoveInWindow = (event) => {
    event.preventDefault();
    dispatch(pan(event));
  
   
  };
  const onMouseUpInWindow = () => {
    window.removeEventListener("mouseover", onMouseUpInWindow);
    window.removeEventListener("mousemove", onMouseMoveInWindow);
    document.body.style =" overflow:visibility"
   
  };
  const onMouseDown = (event) => {
    dispatch(startPan(event));
    window.addEventListener("mouseup", onMouseUpInWindow);
    window.addEventListener("mousemove", onMouseMoveInWindow);
    document.body.style =" overflow:hidden"
  };
  const onWheel = (event) => {
    if (event.deltaY !== 0 && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      dispatch(zoom(event, containerRect));
      document.body.style =" overflow:hidden"
    }
  };
  return {
    ...state,
    containerRef,
    onMouseDown,
    onWheel,
  };
};
