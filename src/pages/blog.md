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
  sectionId: null
content_blocks:
  - _bookshop_name: sections/blogCards
    content:
      sectionId: null
      showNote: true
      heading: null
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      cardStyle: default
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

