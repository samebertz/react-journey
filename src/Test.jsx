import React from 'react'
import './test.css'
import AscensionPip from './AscensionPip';
import {AscensionPipStarClipPath} from './AscensionPip.jsx';

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grabbed: false,
      stops: [1,4],
    }
  }

  getClosestStop = s => {
    const p = this.getClosestPip(s);
    return Math.abs(this.state.stops[0]-p) <= Math.abs(this.state.stops[1]-p) ? 0 : 1;
  };
  getClosestPip = s => {
    return Math.round((s.nativeEvent.layerX + ((s.currentTarget.clientWidth / 6) / 4)) / (s.currentTarget.clientWidth / 6));
  };
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

  // on mouse down, set which stop is grabbed, 0: left, 1: right
  onMouseDown = s => {
    this.setState({grabbed: this.getClosestStop(s)});
    // s.preventDefault(); s.stopPropagation(); return false;
  };
  // on mouse move, bring the stop with the cursor
  onMouseMove = s => {
    const p = this.getClosestPip(s);
    if(p !== this.state.stops[this.state.grabbed] && s.nativeEvent.buttons & 1) this.setStop(p);
    // s.preventDefault(); s.stopPropagation(); return false;
  };
  // on mouse up, unset grabbed
  onMouseUp = s => {
    this.setState({grabbed: false});
    // s.preventDefault(); s.stopPropagation(); return false;
  };

  render() {
    // only listen to move and up if a stop is grabbed
    const handlers = {onMouseDown: this.onMouseDown};
    Object.assign(handlers, false!==this.state.grabbed ? {onMouseMove: this.onMouseMove, onMouseUp: this.onMouseUp} : {});
    return ( <>
      <AscensionPipStarClipPath />
      <div id="test" {...handlers}>
        {new Array(6).fill(0).map((_,i)=><AscensionPip key={i} pip={i} classes={i < this.state.stops[0] ? ['activeSource'] : i < this.state.stops[1] ? ['activeTarget'] : []} />)}
      </div>
    </> )
  }
}

export default Test;

/**
 * TODO
 *  + mousedown(set selected, bind mousemove and mouseup)
 *  + mousemove(move selected)
 *  + mouseup(unbind mousemove and mouseup)
 *  + on initial mousedown, maybe move closest stop?
 *  + bind mousemove and mouseup to window?
 *  + change getClosestStop to grab left stop when stops are superposed and click is on left, or right when click is on right
 */