---
layout: post
title:  "New Template for CKAN Extensions"
date:   2014-11-21
categories: ckan
author: sean_hammond
colour: 2d2d2d
---
We've just <a href=" https://github.com/ckan/ckan/pull/1956">merged a new template for CKAN extensions</a>. Whenever you create a new CKAN extension using the <code>paster --plugin=ckan create -t ckanext ...</code> command (as documented in the <a href="http://docs.ckan.org/en/latest/extensions/tutorial.html">writing extensions tutorial</a>) it'll now use the new template, which gives you:

<ul>
  <li><a href="https://pypi.python.org/pypi">PyPI</a> integration - <code>setup.py</code> and <code>MANIFEST.in</code> files are automatically generated for your extension, ready for publishing to PyPI</li>
  
  <li>A tests directory including stub tests for you to get started <a href="http://docs.ckan.org/en/latest/extensions/testing-extensions.html">writing tests for your extension</a></li>

  <li><a href="https://travis-ci.org/">Travis CI</a> integration - automatically run your tests in a clean environment each time you push a new commit to GitHub. A <code>.travis.yml</code> file and build and run scripts are automatically generated for your extension, you still need to log in to Travis and click the switch to turn on Travis for your extension though.</li>

  <li><a href="https://coveralls.io/">Coveralls.io</a> integration - track the code coverage of your tests. A <code>.coveragerc</code> file is automatically generated for your extension. Again, you still need to login to Coveralls and turn it on.</li>

  <li>A <code>.gitignore</code> file</li>

  <li>A <code>LICENSE</code> file (uses the GNU AGPL by default)</li>

  <li>A <a href="http://docutils.sourceforge.net/rst.html">reStructuredText</a> <code>README</code> file with a skeleton documentation structure including generated installation and configuration instructions, how to run the tests, etc</li>

  <li>Travis, Coveralls and <a href="https://pypip.in/">pypip.in</a> README badges! Show the world that you have continuous integration, good test coverage, PyPI downloads, and your extension's supported Python version, development status and license.</li>
</ul>

<img src="http://ckan.okblogfarm.org/files/2014/11/Screenshot-from-2014-11-21-162614.png" alt="Screenshot from 2014-11-21 16:26:14" width="686" height="133" class="aligncenter size-full wp-image-3409" style="background:transparent;" />

For an example of an extension built using this template, look at <a href="https://github.com/ckan/ckanext-deadoralive">ckanext-deadoralive</a>.

What we're trying to do with this new template is:

<ol>
  <li>Save ourselves time, by not having to manually create all of this boilerplate every time we roll a new CKAN extension</li>
  <li>Help improve the quality of CKAN extensions by encouraging developers to write good tests and documentation, and to use services PyPI, Travis and Coveralls</li>
</ol>

More to come. If you have any ideas for things to add to the CKAN extension template, let us know on <a href="https://lists.okfn.org/mailman/listinfo/ckan-dev">ckan-dev</a>
