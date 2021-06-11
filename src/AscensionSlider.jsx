import React from 'react'
import './AscensionSlider.css'
import AscensionPip from './AscensionPip';
import {AscensionPipStarClipPath} from './AscensionPip.jsx';

/**
 * class component for a discrete range slider within [0,6]
 * collection of 6 svg pips, with wrapper for mouse event handling
 * @extends React.Component
 */
class AscensionSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grabbed: false,
      stops: [1,4],
    }
  }

  /**
   * @function getClosestStop
   * @description computes closest stop to a clicked pip
   * uses `getClosestPip` on the triggering event to get the clicked pip
   * @see getClosestPip
   * @param {SyntheticEvent} s - React SyntheticEvent
   * @return {number} index of stop in `state.stops`, 0: left, 1: right
   */
  getClosestStop = s => {
    const p = this.getClosestPip(s);
    return Math.abs(this.state.stops[0]-p) <= Math.abs(this.state.stops[1]-p) ? 0 : 1;
  };
  /**
   * @function getClosestPip
   * @description computes closest pip to a mouse event
   * acts as if there are 7 pips to handle the inclusive range,
   * offsets triggering event X coordinates by `pipWidth / 4` to set
   * the threshold of selection at 1/4 width from the left of each pip
   * @param {SyntheticEvent} s - React SyntheticEvent
   * @return {number} index of pip, in range [0..6]
   */
  getClosestPip = s => {
    const pipWidth = (s.currentTarget.clientWidth / 6),
          selectThreshold = pipWidth / 4;
    return Math.round((s.nativeEvent.layerX + selectThreshold) / pipWidth);
  };
  /**
   * @function setStop
   * @description sets the grabbed stop to a pip
   * current behavior for dragging stops "through" eachother is defined here to be
   * the stop being dragged "pushes" the other
   * @param {number} p - index of pip to set stop at
   */
  setStop = (p) => this.setState((state,_) => {
    const stops = state.stops.slice();
    stops[state.grabbed] = p;
    // handle if left stop tries to move past right stop, or vice versa
    switch(state.grabbed) {
      case 0:
        if (stops[0] > stops[1]) stops[1] = stops[0];
        break;
      case 1:
      default:
        if (stops[1] < stops[0]) stops[0] = stops[1];
        break;
    }
    return {stops};
  });

  /**
   * @function onMouseDown
   * @description sets grabbed state to the closest stop to a mousedown event, 0: left, 1: right
   * @param {SyntheticEvent} s - React SyntheticEvent of mousedown
   */
  onMouseDown = s => {
    this.setState({grabbed: this.getClosestStop(s)});
    // s.preventDefault(); s.stopPropagation(); return false;
  };
  /**
   * @function onMouseMove
   * @description sets currently grabbed stop in state to a pip, if it is different and lmb is down
   * @param {SyntheticEvent} s - React SyntheticEvent of mousemove
   */
  onMouseMove = s => {
    const p = this.getClosestPip(s);
    if(p !== this.state.stops[this.state.grabbed] && s.nativeEvent.buttons & 1) this.setStop(p);
    // s.preventDefault(); s.stopPropagation(); return false;
  };
  /**
   * @function onMouseUp
   * @description unsets grabbed stop in state
   */
  onMouseUp = _ => {
    this.setState({grabbed: false});
    // s.preventDefault(); s.stopPropagation(); return false;
  };

  /**
   * renders wrapper with mouse event handlers
   * containing 6 pips, styled based on position of stops
   * @return {JSX}
   */
  render() {
    // only listen to move and up if a stop is grabbed
    const handlers = {onMouseDown: this.onMouseDown};
    Object.assign(handlers, this.state.grabbed!==false ? {onMouseMove: this.onMouseMove, onMouseUp: this.onMouseUp} : {});
    return ( <>
      {/* TODO: make a single clip path instead of 1 per slider */}
      <AscensionPipStarClipPath />
      <div id="ascensionSlider" {...handlers}>
        {new Array(6).fill(0).map((_,i)=><AscensionPip key={i} pip={i} classes={i < this.state.stops[0] ? ['activeSource'] : i < this.state.stops[1] ? ['activeTarget'] : ['inactive']} />)}
      </div>
    </> )
  }
}

export default AscensionSlider;

/**
 * TODO
 *  + mousedown(set selected, bind mousemove and mouseup)
 *  + mousemove(move selected)
 *  + mouseup(unbind mousemove and mouseup)
 *  + on initial mousedown, maybe move closest stop?
 *  + bind mousemove and mouseup to window?
 *  + change getClosestStop to grab left stop when stops are superposed and click is on left, or right when click is on right
 */