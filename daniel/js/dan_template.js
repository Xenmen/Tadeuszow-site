

function init_template()
{
	var links="<div class='sidebar-links'>\
	<a href='/index.html'>Family Homepage</a><br>\
	<a href='/index.html'>Daniel's Homepage</a><br>\
	<a href='/ambitions.html'>Ambitions</a><br>\
	<a href='/resume.html'>Resume</a><br>\
	<a href='/tutorials/index.html'>Dan's Tutorials</a><br>\
	<a href='/projects/index.html'>Dan's Projects</a><br>\
	<a href='/html5/index.html'>HTML 5</a><br>\
	<a href='/projects/autoagro.html'>Automated Agriculture</a><br>\
	<a href='/projects/siliquest.html'>Freedom in Computing</a><br>\
	<a href='/projects/thissite.html'>About This Website</a><br>\
	</div><br>";
	
	document.getElementById("header").innerHTML="<div id='sidebar'><img id='sidebar-image' src='http://Tadeuszow.com/images/corner/stubborn.png' alt=' ~There was an image here, it's gone now~ ' /><p id='sidebar-text'>Don't be stubborn, be compatible.</p>"+\
	links+\
	"</div>";
	
	document.getElementById("article").style.width="800px";
	
	document.getElementById("footer").innerHTML="<br><br><br> <footer> &copy; Copyright 2012 - 2014 Daniel Tadeuszow</footer>";
}
