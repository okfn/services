---
layout: post
title:  "The Open Knowledge Data Packager"
date:   2014-06-09
author: sean_hammond
---
<p>Today we&#8217;re launching the <a href="http://datapackager.okfn.org/">Open Knowledge Data Packager</a>!</p>

Data Packager is a web app for quickly creating and publishing
<a href="http://dataprotocols.org/tabular-data-package/">Tabular Data Packages</a> from
collections of CSV files on your computer. You can
<a href="http://datapackager.okfn.org/user/register">register for a free user account</a>
and start creating data packages now, or take a look at a <a href="http://datapackager.okfn.org/package/my-first-tabular-data-package">sample data package</a>.

With Data Packager’s simple interface you can create a data package, upload
CSV files to it, enter some metadata, and get a web page where users can
explore and download your data package. When you login, you’ll be taken to
your dashboard, where you’ll see a list of any packages you’ve created so far and <em>Add package</em> button:

<div class="caption" title="My Data Packager dashboard">
  <img class="screenshot" alt="Data Packager dashboard screenshot" src="http://ckan.okblogfarm.org/files/2014/06/datapackager-dashboard.png" />
</div>

<p>Click the <em>Add package</em> button to create a new data package and you&#8217;ll be taken
to a form where you can enter the title and other metadata for your package:</p>

<div class="caption" title="Creating a new data package">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-create-package.png" alt="Creating a new data package" class="screenshot" />
</div>

<p>Click on <em>Next: Add CSV files</em> and you&#8217;ll be taken to a form where you
can upload one or more CSV files to your data package:</p>

<div class="caption" title="Uploading CSV files to a new data package">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-upload-csv.png" alt="Uploading CSV files to a new data package" class="screenshot" />
</div>

<p>Finally, click on <em>Finish</em> to create your data package. You&#8217;ll be taken to your
data package&#8217;s page:</p>

<div class="caption" title="Browsing your newly created data package">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-browse-package.png" alt="Browsing your newly created data package" class="screenshot" />
</div>

<p>You can publish the URL of this page, or share it with anyone who you want to
share your data package with.</p>

<h2 id="why-tabular-data-packages">Why Tabular Data Packages?</h2>

<p>Tabular Data Packages (defined by the
<a href="http://dataprotocols.org/tabular-data-package/">DataProtocols.org Tabular Data Package spec</a>)
are a simple and easy-to-use data publishing and sharing format for the web.
A Tabular Data Package is
a collection of CSV files with a <code>datapackage.json</code> file.
The <code>datapackage.json</code> file contains metadata about the package (title of the
package, description, keywords, license, etc.) and schemas for each of the
package&#8217;s CSV files.</p>

<p>The format is a good compromise between CSV and Excel, providing the simplicity
and ease-of-use of CSV with some of the expressivity of full-blown
spreadsheets.</p>

<p>The schemas for the CSV files use the
<a href="http://dataprotocols.org/json-table-schema/">JSON Table Schema</a> format,
a simple format for tabular data schemas. It
includes metadata for each of the CSV file&#8217;s columns (column name, type,
description, etc.) and optional primary and foreign keys for the file.</p>

<h2 id="data-packager-features">Data Packager Features</h2>

<p>After you&#8217;ve created your data package and uploaded some CSV files to it,
Data Packager has a few nice features for you&#8230;</p>

<h3 id="download-data-packages">Download data packages</h3>

<p>The <em>Download Data Package</em> button on your data package&#8217;s page will download
a ZIP file including all of your package&#8217;s CSV files and the <code>datapackage.json</code>
file containing the metadata you entered for your package and files, plus schemas
for each of your files:</p>

<a href="http://ckan.okblogfarm.org/files/2014/06/datapackager-download.png"><img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-download.png" alt="Screenshot of Download Data Package button" width="221" height="58" class="aligncenter size-full wp-image-3351" /></a>

<h3 id="schema-browser">Schema browser</h3>

<p>Data Packager automatically generates a JSON Table Schema for each CSV file
that you upload. The generated schema includes:</p>

<ul>
  <li>
    <p><strong>Column names</strong> for each of the file&#8217;s columns (taken from the CSV file&#8217;s
header row, if it has one)</p>
  </li>
  <li>
    <p>The <strong>type</strong> of the data in each column (string, number, date&#8230;), inferred
from the values in the columns</p>
  </li>
  <li>
    <p>Some <strong>descriptive statistics</strong> calculated for numerical columns
(minimum and maximum values, mean, standard deviation&#8230;)</p>
  </li>
  <li>
    <p><strong>Temporal extents</strong> (earliest and latest dates) for date and time columns</p>
  </li>
</ul>

<p>By clicking on one of the CSV files on your data package&#8217;s page, you can browse
the file&#8217;s schema using the schema browser. Each file&#8217;s page shows a preview
of the CSV file contents, and by clicking on the columns in the preview you
can inspect the schema for each column:</p>

<div class="caption" title="The schema browser">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-schema-browser.gif" alt="The schema browser" class="screenshot" />
</div>

<h3 id="schema-editor">Schema editor</h3>

<p>By clicking the <em>Edit</em> button on one of your CSV file&#8217;s pages, you can edit the
file&#8217;s JSON Table Schema and add your own custom attributes.
Data Packager validates all the changes that you make and gives helpful error
messages if you try to save an invalid schema.</p>

<div class="caption" title="The schema editor">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-schema-editor.gif" alt="The schema editor" class="screenshot" />
</div>

<h3 id="primary-and-foreign-keys">Primary and foreign keys</h3>

<p>If you add primary and foreign keys to a CSV file&#8217;s schema, they&#8217;ll also be
shown on the file&#8217;s page.</p>

<div class="caption" title="Primary and foreign keys">
  <img src="http://ckan.okblogfarm.org/files/2014/06/datapackager-keys.png" alt="Primary and foreign keys" />
</div>

<h3 id="api">API</h3>

<p>All of Data Packager&#8217;s features can also be used via its
<a href="http://datapackager.okfn.org/api">JSON API</a>.</p>

<h2 id="open-source">Open Source</h2>

<p>Data Packager is 100% open source. You can:</p>

<ul>
  <li>
    <p>Deploy your own Data Packager site - just
<a href="https://github.com/ckan/ckanext-datapackager">follow our instructions</a> to install
Data Packager on an Ubuntu server</p>
  </li>
  <li>
    <p>Contribute to the <a href="https://github.com/ckan/ckanext-datapackager">Data Packager source code on GitHub</a> - send us a pull request!</p>
  </li>
  <li>
    <p>Report bugs using our <a href="https://github.com/ckan/ckanext-datapackager/issues">issue tracker</a></p>
  </li>
</ul>

<h2 id="built-with-ckan">Built with CKAN</h2>

<p>Data Packager is built using <a href="http://ckan.org/">CKAN</a>, the highly-customisable
open source data portal platform. All Data Packager features are implemented
by a CKAN extension,
<a href="https://github.com/ckan/ckanext-datapackager">ckanext-datapackager</a>.</p>
