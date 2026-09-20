---
_schema: default
draft: false
title: Blog
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Blog
  order: 4
  title: null
  parent: null
  url: null
pageLink: blog
permalink: >-
  {% capture varPagePath %}{% if pageLink%}{% assign pageLink = pageLink |
  slugify%}{{  page.filePathStem |fileSubstringFilter | append: pageLink }}{%
  else %}{% assign title = title | slugify%}{{  page.filePathStem
  |fileSubstringFilter | append: title }}{% endif %}{% endcapture %}{% if
  pagination.pageNumber > 0 %}/{{varPagePath | strip}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}{%
  else %}/{{varPagePath | strip}}{% endif %}/index.html
metaDesc: ''
customCode:
  headCode: ''
  bodyCode: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/simpleHero
  heading:
    _bookshop_name: generic/heading
    content:
      highlightEyebrow: false
      eyebrow: ''
      headline: See what we are up to
      description: ''
      buttons: []
      headingHierarchy: h2
    styles:
      contentAlignment: center
      textAlignment: center
      visualInterest: none
      visualInterestColor: '#000000'
      highContrast: false
      contrastColorGroup: null
      contrastAgainst: null
      textClassOverride: null
    _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
    _uuid: 9a8221b1-93b4-4625-9e28-f2795b9a5fc6
  sectionId: null
  _componentId: simpleHero-8c1dcda7-535f-4605-9e3c-86685737f008
  _uuid: b969d7da-46e1-40d9-b1d7-ad2a5e1af4de
content_blocks:
  - _bookshop_name: sections/blogCards
    content:
      sectionId: null
      showNote: true
      heading: null
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      cardStyle: default
    _componentId: blogCards-337d0560-9b3d-4f91-b2db-f8d1dcb5b6e0
    _uuid: 1cee683c-6ccf-4034-a107-c9253599a11d
_inputs:
  eleventyNavigation:
    hidden: removeFromNavigation
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---

