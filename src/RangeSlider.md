# sss
handle click on component
get appropriate handle
componentdidupdate for drag

# svg mask for thumb
```xml
<svg height="0">
  <clipPath id="clipPath-RangeThumb">
    <path d="M -16 0 Q 0 0 0 -16 Q 0 0 16 0 Q 0 0 0 16 Q 0 0 -16 0" stroke="transparent" fill="black" />
  </clipPath>
</svg>
```

.target {
  mask: url(#mask-1);
}

# approaches
+ pair of range inputs
  - get range input behavior "for free"
  - get some a11y amd fallback to text for free
  - have to style on range :track and :thumb pseudo
  - event handling more complex with overlapping nodes
+ div parts
  - nothing for free
  - basic styling, and easier to use svg
  - basic event handling
+ svg parts
  - div parts but more complicated, both in code and styling capability

something like layered range inputs with thumbs that have z-indexing such that when both are in the same position, the top half of the "lower" range shows and the bottom half of the "top" range shows. events passed to input elements appropriately. get drag interactions this way.