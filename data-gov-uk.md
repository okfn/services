---
layout: page
title: data.gov.uk
permalink: /data-gov-uk/
---

<a href="http://data.gov.uk/" title="Go to data.gov.uk">data.gov.uk</a> is the official Open Data portal of the UK Government. The site provides a central way into the wealth of government data, and aims to make that data 'easy to find, easy to license, and easy to re-use.' A beta version went live in October 2009, and the site was [publicly launched by Sir Tim Berners-Lee][TBL], the inventor of the World Wide Web, in January 2010.

data.gov.uk is built using CKAN to catalogue, search and display data. (Other aspects of the site, such as blog posts, forums, comments, etc, are handled by Drupal, the open source CMS.) The Open Knowledge Foundation's CKAN team were involved in the site from its inception, and helped develop and maintain it for the first two years. In early 2012 the UK government took its CKAN work in-house, but they continue to work closely with the CKAN team and make regular code contributions back to CKAN - a striking example of the advantages of open-source projects.

<div class="screenshots" title="data.gov.uk: searching for data">
  <img src="https://farm8.staticflickr.com/7130/7460617010_4026b5392a_b_d.jpg" alt="[IMG: The new data.gov.uk site]" class="screenshot" />
  <img src="https://farm8.staticflickr.com/7130/7460617010_4026b5392a_b_d.jpg" alt="" class="screenshot" />
  <img src="https://farm8.staticflickr.com/7130/7460617010_4026b5392a_b_d.jpg" alt="" class="screenshot" />
</div>

The site was originally designed with Drupal handling all page requests, and CKAN as a back-end catalogue service. CKAN's rich metadata and search API made it possible to do this. However, by the time data.gov.uk [relaunched][] in June 2012, [it was clear][behind-scenes] that CKAN's excellent web interface provided a better search experience, while maintaining a Drupal module to handle these API calls was an unnecessary duplication of effort. Instead, all requests for data (the 'Data' tab at data.gov.uk) are now sent by the web server straight to CKAN, while other tabs are handled by Drupal. This side-by-side CKAN / Drupal integration is described by David Read on the data.gov.uk blog [here][Drupal-int].

The initial requirements for data.gov.uk were data catalogue capabilities (entering, editing, listing, and searching datasets) combined with basic CMS features (site content, blog, theming etc). In addition, CKAN has delivered in the following areas:

<ul>
<li>Robustness</li>
<li>Data validation and quality checking</li>
<li>Editing workflow</li>
<li>Complex search including faceting by tag, government department, theme, etc</li>
<li>RDF representations of dataset metadata</li>
<li>Integration with the Drupal content management system</li>
<li>Support for geospatial metadata, especially in relation to INSPIRE requirements for search and discovery</li>
<li>Automated ‘harvesting’ of metadata and material from 3rd sources within and outside government</li>
<li>Graph previews and map visualisations for spreadsheet data</li>
<li>General support and maintenance</li>
</ul>

The data.gov.uk site, including its CKAN component, has also undergone penetration testing by UK government security testing consultants.

The UK government continues to use and develop data.gov.uk, and the site has a global reputation as a leading exemplar of a government data portal. The system has successfully handled growth from a few dozen to many thousands of datasets, and a concomitant growth in site traffic. It has played a significant enabling role in the development of the UK government’s transparency and open data agenda.

<div class="caption" title="A data resource on data.gov.uk">
  <img src="https://farm9.staticflickr.com/8457/8053396234_691481376d_b_d.jpg" alt="[IMG: data.gov.uk resource page]" class="screenshot" />
</div>

Andrew Stott, responsible for the launch of data.gov.uk while UK Government Director of Transparency &amp; Digital Engagement, had this to say: "Using Open Source was the best decision we ever made. A big thumbs up to the Open Knowledge Foundation and CKAN."

[TBL]: http://www.guardian.co.uk/technology/blog/2010/jan/21/timbernerslee-government-data
[relaunched]: http://data.gov.uk/blog/the-new-datagovuk
[behind-scenes]: http://data.gov.uk/blog/the-new-datagovuk-behind-the-scenes
[Drupal-int]: http://data.gov.uk/blog/integrating-ckan-and-drupal
