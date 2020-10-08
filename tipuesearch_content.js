var tipuesearch = {"pages":[{"title":"News","text":"Best paper at AAMAS 2015 A paper I co-authored, \" HAC-ER: A disaster response system based on Human-Agent Collectives \", won the best paper award (Innovative Applications) at the Autonomous Agents and Multi-Agent Systems (AAMAS) in Istanbul.","tags":"pages","url":"http://trungdong.github.io/news.html","loc":"http://trungdong.github.io/news.html"},{"title":"Software","text":"PROV Python package The PROV package is a Python library for the PROV Data Model (PROV-DM) , the standard for exchanging provenance data on the Web recommended by the World Wide Web Consortium. I started developing this library since my participation in the Provenance Working Group at W3C (2012) to support recording provenance in various Python applications. As far as I am aware, it is still the only PROV library in Python available. See a short tutorial to have an overview of the library. Web Applications I have been involved in the development of various web applications built on the Django platform . Below are the ones that I led. ProvStore ProvStore is the first online public provenance repository supporting W3C's PROV standards. It allows users and applications to store and publish the provenance of their data on the Web. Provenance documents can be transformed, visualized, and shared in various file formats, with all the functionality also available via a RESTful API Paper: ProvStore: A Public Provenance Repository PICASO PICASO is an online platform that crowdsources the links between related scientific work and any other relevant entities and events such as the dataset(s) it used, the poster or slides presenting it, the project that funded its authors, and even the presentation activity of the work in a conference session. PICASO encourages linking to objects residing in their own silos, such as linking a presentation on SlideShare to the digital object identifier (DOI) of the original paper. By so doing, PICASO provides the tool for researchers to publicly document the origins and derivatives of their work, or its provenance. CollabMap Paper: Collabmap: Crowdsourcing Maps for Emergency Planning Demonstrations HAC-ER Paper: HAC-ER: A disaster response system based on Human-Agent Collectives","tags":"pages","url":"http://trungdong.github.io/software.html","loc":"http://trungdong.github.io/software.html"},{"title":"A new home for ProvStore","text":"With my move to a new institution, the ProvStore at Southampton is no longer maintained. In the recent months, we have been gradually migrating the PROV services to a new home at openprovenance.org , hosted by King's College London. The new ProvStore service now lives at openprovenance.org/store . (Please see Luc's blog post for the other services) Backup your ProvStore data We plan to retire the Southampton ProvStore service soon this year. In order to help the current users in downloading their data there, I wrote a ProvStore backup script (in Python): github.com/trungdong/provstore-backup . Due to data protection, it is not possible for us to migrate user data to the new service. If you want to use the new ProvStore for storing your backed up provenance documents, you will need to create an account at the new ProvStore and upload the documents following the restore instructions . Other changes With the impending retirement of Python 2 , I have migrated the code base of ProvStore to Python 3 , which is powering the new service. In addition, ProvStore is now using Keycloak as the authentication backend, with the view that it will be the central identity management service for all our future services at openprovenance.org. Undoubtedly, with such major changes to ProvStore, unforeseen issues will emerge. If you run into problems using the new service, please do report them and I will try to address them.","tags":"Provenance","url":"http://trungdong.github.io/provstore-new-home.html","loc":"http://trungdong.github.io/provstore-new-home.html"},{"title":"Provenance Network Analytics paper","text":"I am very pleased to announce that the above paper has been published in Springer's Data Mining and Knowledge Discovery journal. It presents a novel approach to analysing provenance information, combining provenance network metrics and machine learning; the main aim currently is to label data from analysing their provenance. The paper is available online and you can also get the PDF version directly at http://rdcu.be/G3Nz . This is also the first time that I published all the data and code used to produce the paper's results online: https://github.com/trungdong/datasets-provanalytics-dmkd There, you can find notebooks describing the data preparation and the analyses shown in the paper along with some extra experiments that were not included due to space constraints. What is it about? Traditionally, data analytics usually involves analysing the data themselves to discover patterns, outliers, and insights. In the paper above, we analyse instead the provenance of the data, that is the historical record of the data describing its origins and what influenced its production. Analysing provenance records, however, is not straight-forward. Within the PROV data model that we use, there are three main provenance concepts: Entity , Activity , and Agent . In addition, there are 15+ possible provenance relations to link the three concepts, each of which has a specific meaning. In this work, we represent provenance information as a graph and analyse the topological characteristics of such a graph using network metrics, for example, measuring its size, diameter, or the distances between certain elements. By so doing, we can subsume provenance information into a set of numeric values reflecting the topology of its graph-based representation. Having the numeric features from provenance information, we then apply off-the-shelf machine learning algorithms to build predictive models for properties of the data described in the provenance information. Using this approach, in three different applications, we could re-infer the owners of provenance documents, assess the quality of crowdsourced data from CollabMap , and detect instructions from chat messages in an alternate-reality game. In brief, the approach aims to infer some properties of data from analysing the network features of the data's provenance information, hence the name Provenance Network Analytics . One nice thing about this approach is that, apart from initial training examples, the predictive models can operate on provenance (represented using the PROV standards) without relying on domain-specific information. Therefore, it can serve as a generic data analytics tool in applications where provenance are captured or can be generated (from application logs, for example). We describe the approach in detail in the paper. If you are interested to know more, go read the paper at http://rdcu.be/G3Nz .","tags":"Research","url":"http://trungdong.github.io/provenance-network-analytics-paper.html","loc":"http://trungdong.github.io/provenance-network-analytics-paper.html"},{"title":"Getting started with provenance","text":"Where to start if you are interested in learning about provenance? tracking provenance in your application? or just playing with some provenance data? This post aims to list all the tools, software, and materials that I know about to everyone find what they need. ONGOING -- STILL BEING UPDATED Provenance concepts PROV is the current standard for provenance (by the World Wide Web Consortium). I recommend looking at the document roadmap in PROV-OVERVIEW first to see what it comprises and what document to read next. You might also find the book Provenance: An Introduction to PROV by Luc Moreau and Paul Groth, who chaired the standardisation of PROV, useful. Libraries Working with PROV in Java: ProvToolbox (with tutorials). Python: my PROV Python package ( tutorial ). JavaScript: ProvJS . Matlab: Matlab provenance package Other provenance libraries: R: RDataTracker , recordr . Software & Web Applications ProvStore : a free public repository for provenance documents ( REST API available). ProvValidator : a validator to check if your provenance is valid (against PROV-CONSTRAINTS ) ProvTranslator : an online translator that converts your provenance into a PROV serialisations or SVG graphical format. provconvert : a command-line tool provided by ProvToolbox, which provides a convenient way to convert provenance data on your machine. It supports all PROV serialisations and various graphical outputs (e.g. SVG, PDF). PROV-N Editor : an online editor for PROV-N with syntax highlighting if you want to write down some PROV-N statements quickly. Provenance Data Public documents on ProvStore Provenance in the wild Linked datasets using PROV Vocabularies using PROV You can also generate synthetic provenance data using the -generator option provided by the provconvert utility that comes with ProvToolbox (see above). What have I missed? Do let me know by dropping me a message below. Tweet to @trungdong","tags":"Provenance","url":"http://trungdong.github.io/getting-started-with-provenance.html","loc":"http://trungdong.github.io/getting-started-with-provenance.html"},{"title":"PROV Python 1.5.0 Released!","text":"I am pleased to announce that, after over a year since Prov Python 1.4.0 , a new version of PROV Python library , version 1.5.0, is now available from PyPI. Thanks to the significant contribution by Satrajit Ghosh , the library now supports RDF output and input (following the PROV ontology PROV-O ). This new serialisation is backed by rdflib and, hence, allows you to read/write PROV from/to all the representation supported by the library, such as Turtle , TriG (for PROV document with bundles), JSON-LD , etc. In addition to the usual bug fixes and minor improvements, some other changes are: A direction parameter can now be specified when generating PNG, PDF, SVG, etc. with prov_to_dot . Once a PROV document is converted to a NetworkX graph, you can convert the graph back to a PROV document with graph_to_prov (say after some graph manipulations). PROV Python library is now tested with Python 3.5. Do you use ProvPy? It is a nice surprise to learn that the PROV Python library is redistributed on Conda Forge (as I am not an Anaconda user). If you are using the library in your software, I would love to hear about it! Please tweet it using the hashtag #ProvPy . As always, I would love to hear about any issue or feedback you might have, especially after a significant release of the library. Please report them to the library's issue tracker . Many thanks! Getting started If you are new to ProvPy or PROV, look at the tutorial here to see it in action. Go next to the library's documentation to learn more. You can also find lots of publicly shared provenance documents available on ProvStore . If you prefer a Java-based solution, get ProvToolbox by Luc Moreau .","tags":"Provenance","url":"http://trungdong.github.io/provpy-1.5.0.html","loc":"http://trungdong.github.io/provpy-1.5.0.html"},{"title":"PROV Python 1.4.0","text":"Last night, I released a new version of PROV Python library , version 1.4.0 . It fixes the prov:QUALIFIED_NAME bug that I had inadvertently introduced since the inception of the library. ProvToolbox recently fixed the same bug (since version 0.7.0 ), and with this release, the two libraries are again compatible with each other. This release is somewhat significant as existing provenance documents generated by previous versions of the library may no longer work with this version (and future versions). Before I discuss the details, the main changes in this release are: Changed the type of qualified names to prov:QUALIFIED_NAME Removed XSDQName class and stopped supporting parsing xsd:QName as qualified names Replaced pydot dependency with pydotplus Removed support for Python 2.6 prov:QUALIFIED_NAME, prov:QualifiedName, and xsd:QName W3C's PROV-DM defined the abstract concept of Qualified Name but not a concrete type for it. Previously, I wrongly assumed the type for qualified names is prov:QualifiedName , which turned out to be not even a defined concept in any of the PROV documents. The type was then used mainly in PROV-JSON serialisations produced by the prov library and, sometimes, also seeped into its PROV-N outputs. PROV-N, as it happened, did define the type for PROV's qualified names as prov:QUALIFIED_NAME — a fact somehow escaped me. This release replaced prov:QualifiedName with prov:QUALIFIED_NAME. Hence, literals of prov:QualifiedName type in existing PROV-JSON documents will no longer be recognised as qualified names by prov 1.4.0 and later. However, such documents should still be readable by the library, albeit with different semantics. Regarding xsd:QName , the type had been treated as a sub-type of prov:QualifiedName, and hence, had been recognised as qualified names in the prov library. This means that the library would try to resolve the prefix provided in a xsd:QName value to one of the defined namespaces in the containing document. Such behaviour is not expected; in fact, xsd:QName and prov:QUALIFIED_NAME are incompatible types (see Luc's page on Qualified Names for more information). Hence, I decided to removed XSDQName class from the prov library, effectively removing support for resolving xsd:QName values into qualified names. Python 2.6 no longer supported The 2.6 branch of Python had been at its end of life since Oct 2013 with the 2.6.9 release . The prov library's support for Python 2.6 had been requiring extra effort in writing codes for it and testing them, in addition to those to support Python 3. With more and more libraries dropping support for Python 2.6 (including networkx and pydotplus, which are used by prov), I think it is time for prov to move on. From version 1.4.0, prov no longer works with Python 2.6. It remains working with, and being tested for, Python 2.7, 3.3, 3.4, and PyPy. pydot and pydotplus pydot had been used to represent PROV documents in the DOT format, allowing for the conversion of such documents into SVG, PNG, PDF, and other graphical formats supported by the excellent Graphviz package. The pydot, however, have not been updated for over 4 years. The official package does not work with Python 3 and, as a result, we had to use an unofficial fork. In this release, we decided to use pydotplus , a drop-in replace for pydot that works with Python 3. At the same time, I took the opportunity to create a test for the DOT generation feature of prov. Although I still cannot find a way to verify the graphical outputs programmatically, the test at least exercises the code for this feature over the library's extensive test suite. Endnote As this release introduces some significant changes, I would love to hear about any issue or feedback you might have. Please report them to the library's issue tracker . Many thanks!","tags":"Provenance","url":"http://trungdong.github.io/provpy-1.4.0.html","loc":"http://trungdong.github.io/provpy-1.4.0.html"},{"title":"A Short Tutorial for Prov Python","text":"Documentation is hard work! I started the work on the PROV Python package nearly three years ago and yet its documentation is still quite lacking. As a small effort to make up for it, I thought a simple tutorial might help a bit. So here it is: the first tutorial for PROV Python ! It will guide you through: Installing the Prov package Creating a PROV document in Python Exporting the document into PROV-N and PROV-JSON Displaying the document in a graphical format like the one on the right Saving a provenance document in the cloud at ProvStore and retrieve it back All the above can be done in 10-15 minutes! I hope you find the tutorial useful. Any suggestion or request, please do let me know here . PNG export of a simple example from the book Provenance: An Introduction to PROV Updated 27-Feb-2015 : I added a simple instruction in the tutorial showing how to read (i.e. deserialise) a PROV-JSON file into a ProvDocument instance. In addition, I simplified the section on interacting with ProvStore by using Sam Millar 's provstore-api package.","tags":"Provenance","url":"http://trungdong.github.io/prov-python-short-tutorial.html","loc":"http://trungdong.github.io/prov-python-short-tutorial.html"},{"title":"PROV-N Javascript Editor","text":"After showing the TextMate PROV-N bundle to my colleagues, one pointed to me the powerful Ace code editor , which comes with tools to facilitate adding a new syntax. I found it even easier to work with compared to TextMate's bundle editor. After a day, I managed to port the PROV-N syntax rules to Ace and added some more. This is the result. {% img pure-img centered {filename}/images/prov-n-js-editor.png \"PROV-N JavaScript Editor Screenshot\" \"PROV-N JavaScript Editor Screenshot\" %} Try the new PROV-N editor and let me know what you think.","tags":"Provenance","url":"http://trungdong.github.io/prov-n-javascript-editor.html","loc":"http://trungdong.github.io/prov-n-javascript-editor.html"},{"title":"TextMate Bundle for PROV-N","text":"The Provenance Notation ( PROV-N ) has been my chosen representation when it comes to writing provenance. It has a relatively low cognitive cost and easier for humans to read (at least to me), compared to other provenance representations. Even so, I usually found myself making mundane mistakes and typos and have had to repetitively rely on the Provenance Validator to check my provenance for syntactical errors. Hence the motivation to find a tool to help write provenance faster with less mistakes. Here comes TextMate ! TextMate is a powerful text editor on Mac (which I have only used it lightly, on and off). It provides support for numerous text file formats thanks to the flexible extensibility it offers. Having discovered how to define a new language in TextMate, I set off trying to find a way to alleviate my pains with PROV-N authoring right away. To cut the story short, here is the results. {% img pure-img centered {filename}/images/textmate-prov-n-screenshot.png \"Screenshot of TextMate with PROV-N syntax highlighting\" \"Screenshot of TextMate with PROV-N syntax highlighting\" %} If you like what you see, grab the PROV-N TextMate bundle from my github repository . An installation of TextMate, of course, is required. {% img pure-img float-right {filename}/images/textmate-prov-n-snippets.png \"PROV-N Snippets\" \"PROV-N Snippets\" %} In addition to the PROV-N syntax highlighting, another bonus provided by the bundle is the tab-triggered snippets for all PROV-N statements. For example, you can just type wd⇥ ( ⇥ is the tab key) to get wasDerivedFrom(, , -, -, -, []) . The list of all snippets is on the right (or look them up in the Bundles > Provenance Notation menu in TextMate). Please note though that the PROV attributes snippets are available only between the square brackets (i.e. the attributes block) in a statement. Disclaimer: The bundle is my very first attempt and there are many issues remained. Please don't expect it supports all possible valid PROV-N statements. If you are working with PROV-N, I hope you will find this TextMate bundle useful. Contributions and suggestions are very welcome. For Sublime Text users : You can install the PROV-N language grammar in Sublime Text to get the same syntax highlighting as shown above. To do this, download and copy the file to the User package folder (Menu: Preferences > Browse Packages...) Update : A JavaScript code editor supporting the PROV-N syntax is now available. See this post .","tags":"Provenance","url":"http://trungdong.github.io/prov-n-textmate.html","loc":"http://trungdong.github.io/prov-n-textmate.html"}]};