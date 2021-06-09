import './AscensionPip.css'

/**
 * AscensionPip
 * function component for pip. renders empty div with ascensionPip class
 * and passed classes, props
 * currently passed class sete styling for pip status - activeTarget, activeSource, inactive
 * while passed prop is the pip number
 * 
 * @param {Array} classes
 * @param {Props} props
 * @returns {JSX}
 */
function AscensionPip({classes=[''], ...props}) {
  return (
    <div className={`ascensionPip ${classes.join(' ')}`} {...props} />
  )
}

/**
 * AscensionPipStarClipPath
 * function component for svg clipPath
 * gets applied to AscensionPip component through ascensionPip css class styling
 * 
 * @returns {JSX}
 */
export function AscensionPipStarClipPath() {
  return (
    <svg height="0">
      <clipPath id="ascensionPipStarClipPath" clipPathUnits="objectBoundingBox">
        <Star />
      </clipPath>
    </svg>
  );
}

/**
 * Star
 * svg approximation of ascension star, with defaults for size, stroke, and fill to act as
 * a mask
 * 
 * none of the args are necessary currently
 * 
 * @param {Props} props
 * @returns {JSX}
 */
function Star({s=[.5,.5],q=.47,stroke="none",fill="white",...props}) {
  const o = q/2, c = q/12, r = q/16,
        arc = (dx,dy)=>`a${r},${r} 0 0 0 ${dx},${dy}`;
  return <path {...{stroke,fill}} {...props}
        d={`M ${s[0]},${s[1]}
            m ${-q-c/2},${c/2}
            c ${q},${o} ${q-o},0 ${q},${q} ${arc(c,0)}
            c ${o},${-q} 0,${o-q} ${q},${-q} ${arc(0,-c)}
            c ${-q},${-o} ${o-q},0 ${-q},${-q} ${arc(-c,0)}
            c ${-o},${q} 0,${q-o} ${-q},${q} ${arc(0,c)}`}
  />
}

export default AscensionPip;
