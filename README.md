
# A11y Casts Follow-Along Tutorial
<!-- TOC -->

- [A11y Casts Follow-Along Tutorial](#a11y-casts-follow-along-tutorial)
  - [Video 01](#video-01)
  - [Video 02](#video-02)
  - [Video 03: focus, tab order](#video-03-focus-tab-order)
  - [Video 04: tabindex](#video-04-tabindex)
  - [Video 05: Just use a button](#video-05-just-use-a-button)
  - [Video 06: roving tabindex](#video-06-roving-tabindex)
  - [Video 07: Vo iceOver (Mac) Walkthrough](#video-07-vo-iceover-mac-walkthrough)
  - [Video 08: Why do semantics matter?](#video-08-why-do-semantics-matter)

<!-- /TOC -->
## Video 01

- accessibility = a11y
- 15% of users have some sort of disability

## Video 02

- `inert` makes a DOM element non-tab-interactive
- Natively available in HTML5

## Video 03: focus, tab order

- `focus` selecting an element and directing all keyboard input to that element
  - By default, a blue-highlight-ring indicates focus in the browser
- `tab order` the order that elements are focused by tabbing
- `input` `select` `button` `checkbox` `link` `textarea` are implicitly focusable
- non-interactive elements like `div` and `p` are not implicitidly focusable
- HTML order of elements determines `tab order`
  - Try to construct your html markup so as to yield a sensible `tab order`

## Video 04: tabindex

- `tabindex` useful to control focus
- `tabindex='0'`; makes it possible to `.focus()` programatically
- `tabindex='-1'`; can be useful to manage focus or to disable an interactive control; allows `.focus()`
- `tabindex='1'`; anti-pattern to give higher `tab order`
  - Better to just move the element earlier in the DOM

## Video 05: Just use a button

- Avoid using `div`s as faux-buttons!
  - `button`s activated on spacebar, or enter key press when focused
- `disabled` attribute; native buttons behave as expected; div buttons will not

## Video 06: roving tabindex

- WheelOfFortune radio dial

## Video 07: Vo iceOver (Mac) Walkthrough

## Video 08: Why do semantics matter?

- `affordances` offers user action item
- `role`, `name` (read label), `state: collapsed`, `value`
- `accessibility tree`
- chrome dev tools have accessibility inspection tools