# List
[x] reflect selected in render
 - should selected boolean on list items?
[x] select as set, and remove
[x] filter
[x] output
 - compute from selected
[ ] change global consts, probably don't need characters to be a map, should be array
[ ] use passthroughProps

# Components
## App
view toggles between List and Output, maintains shared state
#### Props
---
#### State
selected List Items

```jsx
state=='edit'
? <CharacterList />
: <MaterialList />
```

### List
flex row wrap of List Items, where key=name
#### Props
#### State

### List Item
grid of list item details
#### Props
#### State

### Output
flex row wrap of materials
#### Props
#### State

# Interactions
## add/remove character
handle click on List Item
## switch between list/output views
handle click in App?

# Concerns
dynamic data in render calls
where to keep selected bools