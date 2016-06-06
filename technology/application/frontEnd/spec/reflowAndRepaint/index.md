A reflow computes the layout of the page. A reflow on an element recomputes the dimensions and position of the element, and it also triggers further reflows on that element’s children, ancestors and elements that appear after it in the DOM. Then it calls a final repaint. Reflowing is very expensive, but unfortunately it can be triggered easily.

Reflow occurs when you:

- insert, remove or update an element in the DOM
- modify content on the page, e.g. the text in an input box
- move a DOM element
- animate a DOM element
- take measurements of an element such as offsetHeight or getComputedStyle
- change a CSS style
- change the className of an element
- add or remove a stylesheet
- resize the window
- scroll

https://gist.github.com/paulirish/5d52fb081b3570c81e3a

http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/

Let’s start with a little background information. A repaint occurs when changes are made to an elements skin that changes visibility, but do not affect its layout. Examples of this include outline, visibility, or background color. According to Opera, repaint is expensive because the browser must verify the visibility of all other nodes in the DOM tree. A reflow is even more critical to performance because it involves changes that affect the layout of a portion of the page (or the whole page). Reflow of an element causes the subsequent reflow of all child and ancestor elements as well as any elements following it in the DOM.
