/*
	Using JavaScript and a splash of CSS you need to do the following to complete the practicum:
		1) As you can see in the HTML, for every <figure> there is an <img> with an "alt" attribute. You need to take the value of the "alt" and add to the page a <figcaption> for each.

		2) Turn the page into a content slideshow:
			A) Hide all of the <section class="slide-content">

			B) Show the first <section class="slide-content">

			C) Add a next button to the page
				When clicked move to the next <section class="slide-content">
				If you are going to move past the end of available <section class="slide-content"> show the first one

			D) Add a previous button to the page
				When clicked move to the previous <section class="slide-content">
				If you are going to move past the beginning of available <section class="slide-content"> show the last one

			E) Add a slide counter to the page that will indicate which slide you are showing (i.e. 1/6)

		EXTRA CREDIT:
			If you want to stretch you JavaScript knowledge and try for some extra points you can add the following:
				You will notice on the final slide that there are two headers and paragraphs explaining the two pilots for the blue lion. Add code that will allow you to toggle the visibility between the two pilots.

	NOTE:
		I want you to work as far into this as you can during the given time. Please complete as much as possible. You will be given points based on the quality and then quantity of your completed code.
*/

//creates and adds the forward and back buttons
var forward_button = document.createElement("div");
forward_button.innerHTML = "next";
forward_button.setAttribute("id", "forward_button");
forward_button.setAttribute("class", "button")

var back_button = document.createElement("div");
back_button.innerHTML = "previous";
back_button.setAttribute("id", "back_button")
back_button.setAttribute("class", "button")

var counter = document.createElement("div");
counter.innerHTML = "1/6";
counter.setAttribute("id", "counter");

//appends the two buttons and the counter to the "main" div
document.body.appendChild(forward_button);
document.body.appendChild(back_button);

//the counter will be appended into each slide as the slide is displayed
//document.body.appendChild(counter);

var slides = document.getElementsByClassName("slide-content");
var current_slide_index = 0;

//hides all of the slides
for (var i = 0, ii = slides.length; i < ii; i++) {
    slides[i].style.display = "none";
}

//shows the first slide and appends the counter to it
slides[current_slide_index].style.display = "";
slides[current_slide_index].appendChild(counter);

//creates and adds buttons to the 6th slide
var sven_button = document.createElement("span");
sven_button.innerHTML = "Sven";
sven_button.setAttribute("class", "alt-pilot-button");
sven_button.setAttribute("id", "sven_button");

var allura_button = document.createElement("span");
allura_button.innerHTML = "Allura";
allura_button.setAttribute("class", "alt-pilot-button");
allura_button.setAttribute("id", "allura_button");

slides[5].appendChild(sven_button);
slides[5].appendChild(allura_button);

//puts the alternative pilots into an array to be used
var alt_pilots = document.getElementsByClassName("alt-pilot");
alt_pilots[1].style.display = "none";

var show_sven = function () {
    if (alt_pilots[0].style.display == "none") {
        alt_pilots[1].style.display = "none";
        alt_pilots[0].style.display = "";
    }
}

var show_allura = function () {
    if (alt_pilots[1].style.display == "none") {
        alt_pilots[0].style.display = "none";
        alt_pilots[1].style.display = "";
    }
}

allura_button.onclick = show_allura;
sven_button.onclick = show_sven;

//shows the next slide
var next_slide = function () {
    slides[current_slide_index].style.display = "none";

    if (current_slide_index < 5) {
        current_slide_index++;
    } else {
        current_slide_index = 0;
    }

    slides[current_slide_index].style.display = "";

    counter.innerHTML = current_slide_index + 1 + "/6";
    slides[current_slide_index].appendChild(counter);
}

//shows the previous slide
var previous_slide = function () {
    slides[current_slide_index].style.display = "none";

    if (current_slide_index > 0) {
        current_slide_index--;
    } else {
        current_slide_index = 5;
    }

    slides[current_slide_index].style.display = "";

    counter.innerHTML = current_slide_index + 1 + "/6";
    slides[current_slide_index].appendChild(counter);
}

forward_button.onclick = next_slide;
back_button.onclick = previous_slide;

//next_slide;

