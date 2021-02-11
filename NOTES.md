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