---
_schema: default
draft: false
title: Services
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Services
  order: 2
  title: null
  parent: null
  url: null
pageLink: services
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
  _bookshop_name: sections/bannerHero
  content:
    sectionId: null
    heading:
      _bookshop_name: generic/heading
      content:
        highlightEyebrow: false
        eyebrow: ''
        headline: How we can help
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
    backgroundImage:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/professional-mechanic/two-mechanics.jpg
      imageAlt: null
      yAxisPosition: 0
      imageSizes: null
      class: null
      imageNumber: null
  styles:
    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
    backgroundOpacity: 50
content_blocks:
  - _bookshop_name: sections/servicesSection
    content:
      sectionId: null
      heading: null
      showNote: true
    styles:
      color_group: primary
      cardStyle: defaultCard
  - _bookshop_name: sections/simpleCta
    content:
      sectionId: null
      CallToAction:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Can't find what you are looking for?
          description: >-
            Give us a call or schedule an appoint and we'll get your car back on
            the road
          buttons:
            - _bookshop_name: generic/button
              url: /contact/
              openInNewTab: false
              text: Schedule an appointment
              color_group: primary
              colorFromGroup: primary
              ghostButton: false
              formSubmit: false
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
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
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

