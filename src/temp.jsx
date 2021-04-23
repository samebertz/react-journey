import React from 'react'
import './RangeSlider.css'

class RangeSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      l: 4,
      r: 6,
    }
  }

  handleLChange = synthEvent => {
    const v = parseInt(synthEvent.nativeEvent.target._valueTracker.getValue())
    this.setState((state, _) => v > state.r ? {'l': v, 'r': v} : {'l': v})
  }
  
  handleRChange = synthEvent => {
    const v = parseInt(synthEvent.nativeEvent.target._valueTracker.getValue())
    this.setState((state, _) => v < state.l ? {'l': v, 'r': v} : {'r': v})
  }

  render() {
    const sliderProps = { min:parseInt(this.props.min), max:parseInt(this.props.max), step:parseInt(this.props.step), };
    return (<>
      <div className="rangeSlider_Wrapper" id={this.props.id || null}>
        <div className="rangeSlider_MaskTop">
          <Slider className="rangeSlider_SliderTop" value={this.state.l} {...sliderProps} handleChange={this.handleLChange} />
        </div>
        <Indicator className="rangeSlider_RangeIndicator" left={this.state.l} right={this.state.r} lRange={this.props.min} rRange={this.props.max} thumbWidth="16px" />
        <div className="rangeSlider_MaskBot">
          <Slider className="rangeSlider_SliderBot" value={this.state.r} {...sliderProps} handleChange={this.handleRChange} />
        </div>
      </div>
      <p>{this.state.l}</p>
      <p>{this.state.r}</p>
    </>);
  }
}

function Slider(props) { return (
  <input id={props.id || null} className={props.className || null} value={props.value} type="range" min={props.min} max={props.max} step={props.step} onChange={props.handleChange} />
)}

const buildLinearGradient = (lColor, rColor, lPos, rPos, lRange, rRange) => {
  console.log({lPos,rPos,range:rRange-lRange})
  // diff from left color max to right color max
  // const cDiff = lColor.map((v,i)=>rColor[i]-v)
  // 
  // const range = rRange-lRange,
  //       lstop = lColor.map((v,i)=>v+rColor[i]-lColor[i]*(lPos - lRange)/range),
  //       rstop = lColor.map((v,i)=>v+rColor[i]-lColor[i]*(rPos - lRange)/range);
  const range = rRange - lRange,
        colorStep = rColor.map((v,i) => (v - lColor[i]) / range),
        lStop = `${colorStep.reduce((a,v,i) => `${a}${lColor[i] + v * lPos},`, 'rgba(')}1)`,
        rStop = `${colorStep.reduce((a,v,i) => `${a}${rColor[i] + v * rPos},`, 'rgba(')}1)`,
        cssString = `linear-gradient(45deg,${lStop},${rStop})`;
  // const cssString = `linear-gradient(45deg,rgb(${lstop.join(',')}),rgb(${rstop.join(',')}))`;
  console.log(cssString)
  // console.log(colorStep);
  // console.log(colorStep.map(x=>x*2))
  return cssString;
}

function Indicator(props) {
  const leftPadding = `${props.thumbWidth} / 2`,
        // stepSize = `(100% - ${props.thumbWidth}) / ${props.range}`,
        stepSize = `(100% - ${props.thumbWidth}) / ${props.rRange-props.lRange}`,
        left = `calc(${leftPadding} + ${stepSize} * ${props.left-1})`,
        width = `calc(${stepSize} * ${props.right-props.left})`,
        backgroundImage = buildLinearGradient([0,0,255], [255,255,255], props.left, props.right, props.lRange, props.rRange),
        style={left,width,backgroundImage};
  return (
    <div id={props.id || null} className={props.className || null} style={style}></div>
  );
}

export default RangeSlider;