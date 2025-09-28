---
_schema: default
draft: false
title: Contact Us
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Contact
  order: 9
  title: null
  parent: null
  url: null
pageLink: contact
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
        headline: Reach out to us
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
      imagePath: /assets/uploads/contact-us/contact-us.jpg
      imageAlt: null
      yAxisPosition: 0
      imageSizes: null
      class: null
      imageNumber: null
  styles:
    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
    backgroundOpacity: 50
content_blocks:
  - _bookshop_name: sections/simpleForm
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Tell us about your situation
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
      form:
        _bookshop_name: simple/formBuilder
        formName: Contact
        sectionId: null
        successPage: /submission/success/
        form_elements:
          - _bookshop_name: generic/form/textInput
            label: First Name
            placeholder: John
            id: 0a7db4b9-356a-41c4-85be-dc72f68f681c
            required: true
            helperText: null
          - _bookshop_name: generic/form/textInput
            label: Last Name
            placeholder: Doe
            id: 581c7d38-043f-4d9d-800f-7b1d164289cf
            required: true
            helperText: null
          - _bookshop_name: generic/form/emailInput
            label: Email
            id: b39e3543-1ffc-4a69-9857-48e97947377e
            required: true
            placeholder: jdoe@example.com
            helperText: null
          - _bookshop_name: generic/form/phoneInput
            label: Phone
            id: fc5da902-d8d9-4c06-9595-75306232dfb9
            required: true
            placeholder: 123 456 7890
            helperText: null
          - _bookshop_name: generic/form/textInput
            label: Vehicle year make model
            placeholder: 2016 Toyota Camry
            id: 0fa22405-1cd3-4244-bc04-85ddd8495868
            required: true
            helperText: null
          - _bookshop_name: generic/form/radioButtonGroup
            label: Preferred appointment time
            id: d69538e8-4907-409f-a64c-69e3caaaa47a
            radioButtons:
              - label: Morning
                id: d4d5fbaa-b2f4-468a-8eef-366060ade754
                checked: true
                required: false
              - label: Evening
                id: ec8a30d1-9605-4315-8874-7ddd3425caae
                checked: false
                required: false
            arrangement: stacked
            helperText: null
          - _bookshop_name: generic/form/textAreaInput
            label: Message
            placeholder: ''
            id: b8a23f9d-5f7e-4149-9853-6b90586823bb
            rows: 7
            required: false
            helperText: >-
              What service are you looking to receive, or describe your problem.
              The more information the better.
          - _bookshop_name: generic/form/fileInput
            label: Relevant photo
            id: ac958556-8fbb-4e22-b579-f862331e20f1
            customAccept: false
            acceptSelection:
              - image/*
            acceptCSV: null
            required: false
            placeholder: null
            helperText: If you have any pictures of your  problem please include those.
        submitButton:
          text: Submit
          color_group: primary
          colorFromGroup: primary
          ghostButton: false
          formSubmit: true
        inboxKey: null
        subject: null
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

