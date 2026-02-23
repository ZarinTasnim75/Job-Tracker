# Job-Tracker
1)i]  getElementById() takes an unique id as a parameter and return one single element.
  ii] getElementsByClassName() takes a class name as input. Under a class we can define many div. It selects all elements of the given class and returns a list.
  iii]querySelector() -this selects the first element that matches any selector defined in css.
  iv] querySelectorAll()-this selects all the matching elements for a css selector and returns a list.

  2) Create and Insert a New Element Into the DOM:
    To create new element , we write: const new_division = document.createElement("div");
    Adding content to it: new_division.textContent="I am a developer";
    Inserting into the DOM: document.body.appendChild(new_division);

  3) Event Bubbling:
     Event Bubbling means a event first actives in inner child element and then travels step by step to its parent elements by activating parent elements also.
   
   4) Event Delegation:
      It means attaching event listener to a parent element so that it can handle corresponding child element. Thats how we do not need to add listener to each child individually and it also works          dynamically.
      
    5) preventDefault() - this function prevents default browser behavior.For Example- form submission,link navigation etc. 
       stopPropagation() - this feature stops event from bubbling so that it doesnot propagate to the parent element.
