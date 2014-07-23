To Do List
==========

#Refactor sidebar javascript
----------------------------
*Create a script (nodejs, bash, or python; ideally the first) that generates sitemap.xml
*Create a single site-wide sidebar.js that references sitemap.xml and generates the appropriate links
*Have said sidebar.js load the current directory's corner image (as listed in sitemap.xml), and if not present, recursively check the parent folders
*Likewise for the text accompanying the corner image
*Note: Having nodejs generate it on server start would be ideal; sitemap.xml could be added to .gitignore and reduce clutter. It has the added benefit of not requiring python or bash, thus being perfectly portable to Windows and non Linux platforms without requiring extra shell scripts or extra code in python to account for these other platforms (filesystem inconsistencies, etc)
#Benefits
*(Main) A unified sidebar script; no more manually updating separate scripts with redundant information. The present schema requires near O(N) manual changes during major sidebar script updates (N being the number of separate sidebar scripts, or new links), where the proposed solution will be O(1); that is sufficient justification for nearly any proposed change :]
*(Auxi) Justifies the creation of a sitemap.xml, which is good practice for me and will expose the site to script writers in a more useful fashion
#Cost
*Fixed cost 
*Upkeep cost depends on the cost of upkeeping sitemap.xml, which with a generator script will be automated, with no manual labour besides setting unique text and corner images in their appropriate directories, with a 'link name' tag or equivalent in all html files (itself a one time costfor each page, with no duplicated labour)



#Sections to add to the site:
>rename and separate server component BDT (Bamboo Dump Truck)
>put it in another git project and just use an options file to reference the path to this site
>move site files to project root folder

*
>
