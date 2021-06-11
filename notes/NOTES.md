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

# ABBRVS

c
ch
chr
char
crtr
chtr
crctr
chctr
chrctr
character

m
mat
mtl
mtrl
material

e
el
elt
emt
elmt
elmnt
element

w
wp
wpn
wep
weapon

t
tnt
tlt
tlnt
talent

a
as
ac
asc
asn
ascn
ascnsn
ascension

c
cn
con
cs
cst
cnst
const
cnstl
cstln
cnstltn
constellation

l
lv
lvl
level

r
rf
ref
rfn
rfmt
rfnmt
refine
refinement

e
en
enh
enc
encmt
enhnc
enhcmt
enhance
enhancement

e
eq
ep
eqp
eqmt
eqpt
eqpmt
equipment

eqd
eqpd
equipped

a
ar
art
atf
afct
artf
arfct
artfct
artifact

s
sk
skl
skll
skill

b
br
bs
bt
bst
brst
burst

p
ps
pv
psv
pasv
passive