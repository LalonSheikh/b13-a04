Live site Link: https://lalonsheikh.github.io/b13-a04/
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:   getElementById  is selected for id name, getElementsByClassName is selected for class Name  , querySelectorAll is selected by cl querySelector is Selected the FIRST element identified or catched.
   querySelectorAll  Selects ALL elements matching a CSS selector.
   2. How do you create and insert a new element into the DOM?
   3. Answer: document.createElement("tag") → create a new element.  Set innerText, innerHTML, className, id, or other attributes). Finally 
Append to the DOM with appendChild
  3. What is Event Bubbling? And how does it work?
   Answer:  Event Bubbling is a upward flow which goes up the DOM tree or parent element from the target element.
   4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is called that listen on a parent, act on the child that triggered the event using event.target and  Works because of event bubbling.
5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer: preventDefault() is preventing a form from submitting, preventing a link <a> from navigating and stopping right-click context menu. on the otherhand
    stopPropagation() is a JavaScript method that stops an event from bubbling up  the DOM tree.
