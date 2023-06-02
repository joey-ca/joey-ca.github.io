/*
  Name: Guannan Zhao
  Date: Feb 20, 2023
  Section: CST8285 section 300 
  Lab: 301
  File: main.js
  Lab objective: build a dynamic personal website with pages for introduction, resume, courses and portfolio using HTML, CSS and Javascript
*/

// Locate the form element
const elForm = document.getElementById("widgets");
// Locate the search input element
const elSearchbox = document.getElementById("searchbox");
// Locate the fieldset element for radio button
const elFilter = document.getElementById("filter");
// Locate the radio button element for level 1
const elRadio1 = document.getElementById("level-1");
// Locate the radio button element for level 2
const elRadio2 = document.getElementById("level-2");
// Locate the select element
const elSort = document.getElementById("level-sort");
// Locate the element for course list 
const elCourseList = document.getElementById("course-list");
// Locate all elements for courses
const elCourses = document.getElementsByClassName("course-info");
// Locate all elements for course titles
const elCourseTitle = document.querySelectorAll(".course-info h3");
// Locate all elements for course codes
const elCourseCode = document.getElementsByClassName("course-code");
// Locate all elements for course levels
const elCourseLevel = document.getElementsByClassName("course-level");

/* a method used to search course by title or code based on the search query */
const searchCourse = () => {
  // Get updated collections for courses, course titles and codes
  const elCourses = document.getElementsByClassName("course-info");
  const elCourseTitle = document.querySelectorAll(".course-info h3");
  const elCourseCode = document.getElementsByClassName("course-code");
  // Get the string of search query 
  let search_query = elSearchbox.value;
  // Loop through the courses
  for (let i = 0; i < elCourses.length; i++) {
    // If the string of search query matches or is part of course title or code  
    if (elCourseTitle[i].textContent.toLowerCase().includes(search_query.toLowerCase()) || elCourseCode[i].textContent.toLowerCase().includes(search_query.toLowerCase()) ) {
      // Remove the `.is-hidden` class
      elCourses[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class
      elCourses[i].classList.add("is-hidden");
    }
  }
}

/* a method used to filter course by level */
const filterCourse = e => {
  // Loop through the courses
  for (let i = 0; i < elCourses.length; i++) {
    // If the course code equals to the value of the raido button triggers the event
    if (elCourseLevel[i].textContent == e.target.value) {
      // Remove the `.is-hidden` class
      elCourses[i].classList.remove("is-hidden");
    } else {
      // Otherwise, add the class
      elCourses[i].classList.add("is-hidden");
    }
  }
}

/* a method used to sort course by level from lowest to highest and vice versa */
const sortCourse = () => {
  // Get a updated collection for courses
  const elCourses = document.getElementsByClassName("course-info");
  // Loop through the courses starting from the end 
  for (let i = elCourses.length - 1; i >= 0; i--) {
    // Append each course to the end of the course list
    elCourseList.appendChild(elCourses[i]);
  }     
}

/* a method used to reset the search query and display all courses */
const resetSearchbox = () => {
  elSearchbox.value = "";
  // Loop through the courses
  for (let i = 0; i < elCourses.length; i++) {
    // Remove the `.is-hidden` class 
    elCourses[i].classList.remove("is-hidden");
  }
}

/* a method used to reset the course filter and display all courses */
const resetRadio = () => {
  elRadio1.checked = false;
  elRadio2.checked = false;
  // Loop through the courses
  for (let i = 0; i < elCourses.length; i++) {
    // Remove the `.is-hidden` class 
    elCourses[i].classList.remove("is-hidden");
  }
}

/* Add event listeners to the elements that trigger the event such as input, change and blur (lose focus). */
elSearchbox.addEventListener("input", searchCourse);
elRadio1.addEventListener("change", filterCourse);
elRadio2.addEventListener("change", filterCourse);
elSort.addEventListener("change", sortCourse);
elFilter.addEventListener("blur", resetRadio, true);
elSearchbox.addEventListener("blur", resetSearchbox);


