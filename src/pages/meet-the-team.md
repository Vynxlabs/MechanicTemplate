---
_schema: default
draft: false
title: Meet the Team
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Meet the Team
  order: 3
  title: null
  parent: null
  url: null
pageLink: team
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
      headline: Meet the Team
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
  - _bookshop_name: sections/members
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: The people under the lift
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
      members:
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
        - _bookshop_name: generic/memberCards/defaultMemberCard
          content:
            name: Jhon Smith
            titleOrDescription: Technician
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/person.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
            link: null
          style:
            color_group: primary
            colorFromGroup: background
    styles:
      color_group: primary
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

