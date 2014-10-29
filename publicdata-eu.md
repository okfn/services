---
layout: page
title: PublicData.eu
permalink: /publicdata-eu/
---

<a href="http://publicdata.eu/" title="Go to publicdata.eu">PublicData.eu</a> is a research prototype of a pan-European data catalogue and federation mechanism, developed as part of the FP7-funded LOD2 project. Based on CKAN, the site is developed as a use case and an early adopter of the LOD2 linked data stack technologies. After the LOD2 project’s launch in September 2010, a first version of the site was released in June 2011.

<div class="screenshots" title="Screenshots of publicdata.eu">
  <img src="http://ckan.org/files/2011/10/Screen-Shot-2011-10-24-at-17.24.17.png" alt="" class="screenshot" />
  <img src="http://ckan.org/files/2011/10/Screen-Shot-2011-10-24-at-17.25.16.png" alt="" class="screenshot" />
  <img src="http://ckan.org/files/2011/10/Screen-Shot-2011-10-24-at-17.25.16.png" alt="" class="screenshot" />
</div>

The portal’s backend uses CKANs harvesting framework to retrieve, normalize and convert dataset metadata from 25 catalogues across Europe, including national and regional as well as official and community-driven efforts. For example, the portal includes all instances of CKAN (such as data.gov.uk), France’s Data Publica, Swedens OpenGov.se, CSI Piemonte’s Dati Piemonte and several municipal catalogues, including those of London, Paris and Vienna. The site is also able to include geodata directories; such as the EU’s national INSPIRE registries. The harvesting of datasets is performed via an automated service, using APIs where available and screen-scraping for the remaining catalogues. Further key functionality of the portal includes:
<ul>
	<li>Multi-lingual metadata is managed within the system, allowing filtering and multi-lingual descriptions.</li>
	<li>A SPARQL endpoint is offered additionally to the standard CKAN API to allow easy access to structured catalogue metadata. All dataset views are RDFa-enabled and a RDF/DCat representation for each individual dataset is available through an extended API.</li>
	<li>Applications and Ideas developed during the Open Data Challenge competition are presented in an integrated catalogue with multiple screenshots and tagging. This helps to highlight the value of available data in general and specific datasets.</li>
</ul>

<ul>
	<li>Categorization is based on taxonomy normalization, yielding a common set of dataset categories based on EUROVOC. This allows topical navigation across multiple dataset languages.</li>
	<li>A custom visual style was applied to the portal, using CKANs advanced theming support to develop a functional and elegant interface.</li>
	<li>A map-based overview of data availability throughout Europe, demonstrating which countries are leading in their effort to open up government information.</li>
</ul>
During the remainder of the four-year runtime of the LOD2 project, further extensions to the portal have been planned, including full support for SKOS-based, multi-lingual thesauri, and work to integrate the LOD2 data processing components to enable automated conversion and refinement of linked data sources. Further research will include the use of domain-specific descriptions for extended dataset metadata, e.g. for financial and legislative information.
