

function init_template()
{
	//
	var corner_image_url=document.getElementById("corner_image").getAttribute("content");
	//TODO: If the referred tag doesn't exist in the current document, reference it from the parant via the sitemap
	
	var corner_image_html="<img id='sidebar-image' src=\"" + corner_image_url + "\" alt=' ~There was an image here, it's gone now~ ' />";
	
	
	//The friendly text beside the image!
	var corner_text=document.getElementById("corner_message").getAttribute("content")
	//TODO: If the referred tag doesn't exist in the current document, reference it from the parant via the sitemap
	
	var corner_text_html="<p id='sidebar-text'>" + corner_text + "</p>";
	
	
	//List of links on the sidebar
	var sidebar_links="<a href='http://tadeuszow.com/index.html'>Family Homepage</a><br>\
			<a href='/index.html'>Daniel's Homepage</a><br>\
			<a href='/ambitions.html'>Ambitions</a><br>\
			<a href='/resume.html'>Resume</a><br>\
			<a href='/music/index.html'>Music</a><br>\
			<a href='/tutorials/index.html'>Dan's Tutorials</a><br>\
			<a href='/projects/index.html'>Dan's Projects</a><br>\
			<a href='/html5/index.html'>HTML 5</a><br>\
			<a href='/projects/autoagro.html'>Automated Agriculture</a><br>\
			<a href='/projects/libreware.html'>Freedom in Computing</a><br>\
			<a href='/projects/thissite.html'>About This Website</a><br>";
	//TODO: generate from sitemap.xml
	
	//
	var sidebar_links_html="<div class='sidebar-links'>" + sidebar_links + "</div><br>";
	
	document.getElementById("header").innerHTML="<div id='sidebar'>" + corner_image_html + corner_text_html + sidebar_links_html + "</div>";
	
	document.getElementById("article").style.width="800px";
	
	document.getElementById("footer").innerHTML="<br><br><br> <footer> &copy; Copyright 2012 - 2014 Daniel Tadeuszow</footer>";
}
