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
    _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
  sectionId: null
  _componentId: simpleHero-8c1dcda7-535f-4605-9e3c-86685737f008
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
        _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
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
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
    styles:
      color_group: primary
    _componentId: members-08b932da-6575-4a93-a176-bb10f9428326
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

