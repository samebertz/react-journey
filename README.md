# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# TODO

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

## Qs
+ if there's a list of items with editable data, is each item a form?
+ what if each item has 1 field?
+ what if each item has multiple fields?
+ what if the editable state is owned by each item?
+ what if there is a submit button on each item?
+ what if there is a submit button outside the list?
+ what if subscribing to changes?
+ what if only applying changes on submit?

# Scratch
user data
┣ characters
┃ ┗ stats
┗ weapons
  ┗ stats

view state
┣ view modes
┣ list filters and ordering
┗ tracked characters


┣┃┗┳━


could have edit modes save to their own copy of data, or write to main store on change

#### List
- character list display mode toggle
  + animated
- tracked character editing
