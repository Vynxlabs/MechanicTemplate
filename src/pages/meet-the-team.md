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
    _uuid: 96da1454-ecaa-4388-8896-993ca58730b1
  sectionId: null
  _componentId: simpleHero-8c1dcda7-535f-4605-9e3c-86685737f008
  _uuid: 33878f1c-30fd-48a6-abc0-708558709c3a
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
        _uuid: f3a8aa3e-fbee-423a-a7f2-a417635019d7
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
              _uuid: 6b17811e-6e9f-49a5-8bb4-de2dd6dbfde8
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: d36e467b-0357-45ca-88f7-11eb4302fccc
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
              _uuid: 72612b37-7fcc-4e66-aa31-241b6bd18ec5
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: 4d4570e0-54d3-4be8-a500-83de8b7859bf
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
              _uuid: 283cac6f-894b-4637-8211-27615267bccd
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: e8609b03-d1a2-4398-a510-703e2869963d
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
              _uuid: bf15c563-9d7b-442a-96f3-f9a3fb10a78e
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: e2942e6a-a93e-4f05-99db-100ff9798810
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
              _uuid: e243d598-464e-49f4-8896-10a5ddcf68e6
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: 1a76822d-6577-4e86-a0ab-1c53532420e5
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
              _uuid: ba389652-fe2e-499a-b0f3-2c6b3e1034e1
            link: null
          style:
            color_group: primary
            colorFromGroup: background
          _componentId: defaultMemberCard-e2405779-d231-4e9e-b771-f88b13a6b3fa
          _uuid: 22a0713a-6173-4c12-a277-d68417073ece
    styles:
      color_group: primary
    _componentId: members-08b932da-6575-4a93-a176-bb10f9428326
    _uuid: 50bbb27f-8723-41b5-bc8f-f57ca104e7f4
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

