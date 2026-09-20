---
_schema: default
draft: false
title: Professional Mechanic
eleventyExcludeFromCollections: false
disableNav: false
removeFromNavigation: false
eleventyNavigation:
  key: Home
  order: 1
  title: null
  parent: null
  url: null
pageLink: /
permalink: >-
  {% if pageLink == 'blog' or pageLink == 'Blog' %}/{{pageLink | slugify}}{% if
  pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif
  %}/index.html{% elsif pageLink %}/{% assign pagelink = pageLink | slugify
  %}{{  page.filePathStem | fileSubstringFilter | append: pagelink | downcase
  }}/index.html{% else %}/{% assign title = title | slugify %}{{
  page.filePathStem | fileSubstringFilter | append: title | downcase
  }}/index.html{%endif %}
metaDesc: null
customCode:
  headCode: ''
  bodyCode: ''
layout: layouts/page.html
hero:
  _bookshop_name: sections/leftRightHero
  content:
    sectionId: null
    heading:
      _bookshop_name: generic/heading
      content:
        highlightEyebrow: true
        eyebrow: '\[\[st.name\]\] \| serving \[\[tk.area\]\]'
        headline: 'Fast, Reliable Auto Repairs You Can Trust!'
        description: Serving the community with honest pricing and top-notch service.
        buttons:
          - _bookshop_name: generic/button
            url: /contact/
            openInNewTab: false
            text: Schedule your service
            color_group: primary
            colorFromGroup: primary
            ghostButton: false
            formSubmit: false
            _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
            _uuid: d40a64f4-5f63-4b99-8356-42e0ff5ee154
          - _bookshop_name: generic/button
            url: 'tel:[[st.contactInfo.phone]]'
            openInNewTab: false
            text: Call now
            color_group: primary
            colorFromGroup: secondary
            ghostButton: false
            formSubmit: false
            _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
            _uuid: 0542d289-8705-42c6-a290-805f7c8296ed
        headingHierarchy: h2
      styles:
        contentAlignment: left
        textAlignment: left
        visualInterest: none
        visualInterestColor: '#000000'
        highContrast: false
        contrastColorGroup: null
        contrastAgainst: null
        textClassOverride: null
      _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
      _uuid: 1acd5e22-ecc2-46f7-b397-15a51c121142
    image:
      _bookshop_name: generic/image
      imagePath: /assets/uploads/home/mechanic-crossed-arms.jpg
      imageAlt: null
      yAxisPosition: null
      imageSizes: null
      class: null
      imageNumber: null
      imageWidths: null
      _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
      _uuid: 73e68959-6493-4be8-875c-08bc36eef7a2
  styles:
    color_group: primary
    headingRight: false
  _componentId: leftRightHero-00e94732-f654-4541-8b89-03731c6efd84
  _uuid: 680a524f-d273-4d26-9bf5-f9723979140a
content_blocks:
  - _bookshop_name: sections/textBreakReview
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Recent reviews
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
        _uuid: 0e90fa40-cd7a-4375-8a27-6c776e026818
      usePersonImage: true
      reviews:
        - review: 49301fcb-2c3e-4143-b164-23a71185410c
        - review: 8dd4778d-24b7-424b-96f9-63cbb2cc8d80
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
    _componentId: textBreakReview-9ec5a449-69e1-49ed-aa59-0349a4cde163
    _uuid: fa25002a-e9e1-42bf-aaee-bd31d1e45e40
  - _bookshop_name: sections/servicesSection
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Our expert services
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
        _uuid: be00a91d-4030-4acf-af4f-43bcbfd8f019
      showNote: true
    styles:
      color_group: primary
      cardStyle: defaultCard
    _componentId: servicesSection-d06c51f7-7385-4443-8423-400d3f52e2e9
    _uuid: b359eeb0-bbaf-4168-8608-b9301dc9bd2c
  - _bookshop_name: sections/simpleCta
    content:
      sectionId: null
      CallToAction:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: Don't see what you need?
          headline: Give us a call and see how we can help your vehicle
          description: ''
          buttons:
            - _bookshop_name: generic/button
              url: /contact/
              openInNewTab: false
              text: Book an appointment
              color_group: primary
              colorFromGroup: primary
              ghostButton: false
              formSubmit: false
              _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
              _uuid: 352150ac-ace3-4f34-8c68-b9aaea9cc3d9
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
        _uuid: b450b50b-22d6-4f2f-a6c6-2d96c6008b43
    styles:
      color_group: primary
    _componentId: simpleCta-55aa4315-260d-4b9f-a7e6-f4c494799681
    _uuid: d4fb6a0d-3aba-4c52-87b6-a240f2f799e4
  - _bookshop_name: sections/sideBySideStandard
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: About us
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
        _uuid: 79d4628e-53dd-4816-980d-74c24e65ec48
      entries:
        - _bookshop_name: generic/leftRight
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: In business since 2007
                description: >-
                  Welcome to \[\[st.name\]\], where quality, honesty, and
                  reliability drive everything we do. Located in the heart of
                  \[\[tk.area\]\], our shop has been proudly serving the
                  community for over \[X years\]. Whether you're here for
                  routine maintenance, complex repairs, or diagnostics, we treat
                  every vehicle like it’s our own.


                  At \[\[st.name\]\], we believe in more than just fixing
                  cars—we believe in building trust. Our team of certified
                  technicians combines years of expertise with cutting-edge
                  tools to ensure your vehicle gets the care it deserves. From
                  oil changes to transmission repairs, we’re equipped to handle
                  all makes and models, providing you with the peace of mind
                  that your car is in the best hands.


                  What sets us apart? It's our commitment to transparency and
                  customer satisfaction. We take the time to explain every
                  detail of your repair, offering clear estimates with no hidden
                  fees. Our mission is to keep you safe on the road while making
                  your experience as seamless as possible.


                  When you choose \[\[st.name\]\], you're choosing a local
                  business that values hard work, integrity, and community. Stop
                  by today or give us a call to see how we can help keep your
                  vehicle running smoothly.


                  *“At \[\[st.name\]\], your journey is our priority.”*
                buttons: []
                headingHierarchy: h2
              styles:
                contentAlignment: center
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup: null
                contrastAgainst: null
                textClassOverride: null
              _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
              _uuid: 3302c4eb-98ed-4f6c-94a2-3e464abff439
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/professional-mechanic/two-mechanics.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
              _uuid: 420fd04b-923d-4047-84c6-15573fbc68c0
            entryNumber: 0
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
          _componentId: leftRight-eeb30bac-09e7-41ba-a9ab-424fd98ea4b8
          _uuid: 8187481a-b834-4832-95ef-c344bbecc48e
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      startImageRight: false
      fullWidth: true
    _componentId: sideBySideStandard-f655a3f4-fd11-402d-9794-215be5328ad6
    _uuid: 0d069c07-da42-4c26-a18e-34a33aa066b0
  - _bookshop_name: sections/mediaCards
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Current specials
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
        _uuid: e1af9b5f-b8e8-4bb2-a6be-eb8c22aaaca8
      cards:
        - _bookshop_name: generic/mediaCards/defaultMediaCard
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: $10 dollars off your first oil change
                description: >-
                  Keep your engine running smoothly and efficiently with this
                  special offer! New and returning customers can enjoy $10 off
                  their next oil change. Don’t miss this chance to save on
                  routine maintenance.
                buttons:
                  - _bookshop_name: generic/button
                    url: /contact/
                    openInNewTab: false
                    text: Claim now
                    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
                    colorFromGroup: accent
                    ghostButton: false
                    formSubmit: false
                    _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
                    _uuid: a08f08fd-9a70-4f82-b856-6a2809b769f0
                headingHierarchy: h2
              styles:
                contentAlignment: left
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup: null
                contrastAgainst: null
                textClassOverride: null
              _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
              _uuid: d72f1f25-45b2-4650-a26a-a00917653626
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/oil-change-discount.jpg
              imageAlt: null
              yAxisPosition: null
              imageSizes: null
              class: null
              imageNumber: null
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
              _uuid: cf66e5d0-5943-4928-9c2a-815be39ffa20
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
          _componentId: defaultMediaCard-4b69bd88-fb9c-4f5e-bc9e-93df0deb3ba1
          _uuid: 549030f8-fae5-49ed-9a5c-eabf5ecb91e7
        - _bookshop_name: generic/mediaCards/defaultMediaCard
          content:
            heading:
              _bookshop_name: generic/heading
              content:
                highlightEyebrow: false
                eyebrow: ''
                headline: Free break inspection with any service
                description: >-
                  Your safety is our priority! Get a thorough brake inspection
                  at no extra cost when you book any service. Ensure your brakes
                  are in top condition and drive with confidence.
                buttons:
                  - _bookshop_name: generic/button
                    url: /contact/
                    openInNewTab: false
                    text: Claim now
                    color_group: 57af1dbe-0f2e-43f8-8a78-3fc88e5754fe
                    colorFromGroup: accent
                    ghostButton: false
                    formSubmit: false
                    _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
                    _uuid: 34e7508e-d7b1-48f8-9498-a2510b5f994c
                headingHierarchy: h2
              styles:
                contentAlignment: left
                textAlignment: left
                visualInterest: none
                visualInterestColor: '#000000'
                highContrast: false
                contrastColorGroup: null
                contrastAgainst: null
                textClassOverride: null
              _componentId: heading-89db575d-4583-4ff0-89a6-d6931371a72a
              _uuid: cb28b2de-2349-402b-aa52-0cafd4760d40
            image:
              _bookshop_name: generic/image
              imagePath: /assets/uploads/professional-mechanic/free-brake-inspection.jpg
              imageAlt: null
              yAxisPosition: 50
              imageSizes: null
              class: null
              imageNumber: null
              imageWidths: null
              _componentId: image-c1cbbc3b-f7dc-4577-8f8f-c37dd7943db2
              _uuid: c2a8bea5-17ed-4a7a-b859-34979ac14f3f
          styles:
            color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
            colorFromGroup: background
          _componentId: defaultMediaCard-4b69bd88-fb9c-4f5e-bc9e-93df0deb3ba1
          _uuid: 9d4d2514-1226-4f89-a598-9c35c9e3e22d
    styles:
      color_group: primary
    _componentId: mediaCards-38a4f583-ed3a-4e2c-a58d-1dfb80c4c86e
    _uuid: 184e0994-e300-4ab2-95d5-302d9bcc97c8
  - _bookshop_name: sections/reviewCards
    content:
      sectionId: null
      heading:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: What the community has to say about us
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
        _uuid: c6b622d5-4a30-4d66-a46d-f8a7f446fa7b
      usePersonImage: false
      reviews:
        - review: 49301fcb-2c3e-4143-b164-23a71185410c
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: 32e413d3-3ddc-4acd-ae42-ffb13de752fc
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: cf32b299-8ad1-46c9-a970-60c98b1595bc
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: adbc85bd-26c5-418c-b504-4cde47466e2d
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: b9353b86-3276-4bd5-9cf9-34d5113885b3
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
        - review: 8dd4778d-24b7-424b-96f9-63cbb2cc8d80
          card_color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
          colorFromGroup: background
    styles:
      color_group: primary
    _componentId: reviewCards-e9ca074f-936e-4ba6-ba53-c94ee8c1d42b
    _uuid: 01ef652a-c021-4d2d-a409-f557b40d9035
  - _bookshop_name: sections/coloredCTA
    content:
      sectionId: null
      CallToAction:
        _bookshop_name: generic/heading
        content:
          highlightEyebrow: false
          eyebrow: ''
          headline: Ready to get back on the road?
          description: ''
          buttons:
            - _bookshop_name: generic/button
              url: /contact/
              openInNewTab: false
              text: Book an appointment
              color_group: primary
              colorFromGroup: background
              ghostButton: false
              formSubmit: false
              _componentId: button-5a055703-3064-4c18-af21-4c4ef537e497
              _uuid: e32941cb-b83b-4a84-b6d6-aa236868c061
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
        _uuid: 698ccdcf-3b0b-4a0d-87f1-bccc5c30737c
    styles:
      color_group: 5c9075f8-80f9-4482-b041-91cffdfe02be
      card_color_group: primary
      colorFromGroup: primary
    _componentId: coloredCTA-8dd43b36-5bc2-4b3b-912d-f1de497e8467
    _uuid: e0482927-7fc2-458d-9bb2-be3acba92dce
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

