---
_schema: default
draft: false
eleventyExcludeFromCollections: false
disableNav: false
title: 'New customer deal '
metaDesc:
customCode:
  headCode: ''
  bodyCode: ''
date: 2024-12-12T05:16:45Z
happening: false
cancelled: false
happeningDate: 2025-12-31T00:00:00Z
summary: All brand new customers will get $10 dollars off on their first oil change!
author:
tags:
  - Announcement
  - Promotion
blogImage: /assets/uploads/oil-change-discount.jpg
imageAltText:
image: '{% if blogImage %}{{blogImage}}{% else %}{{blog.defaultImage}}{% endif %}'
permalink: >-
  /blog/{% assign title = title | slugify %}{{ page.filePathStem |
  fileSubstringFilter | append: title | downcase }}/index.html
socialImage: '{{ image }}'
_inputs:
  headCode:
    type: code
    comment: Add code at the end of the <head> tag
  bodyCode:
    type: code
    comment: Add code before the </body> tag
---
We’re excited to welcome new customers to \[\[st.name\]\] with a special offer! For a limited time, first-time visitors can enjoy **$10 off** their next oil change.

Whether it’s your daily driver or your weekend cruiser, regular oil changes are essential to keep your engine running smoothly and efficiently. Let us help you stay on top of your car’s maintenance while saving a little extra.

Don’t wait—book your appointment today to take advantage of this exclusive discount. We can’t wait to meet you and show you why \[\[st.name\]\] is the trusted choice for drivers in \[\[tk.area\]\].

**Click below to schedule your oil change now!**<br>[Schedule My Appointment](/contact/)

*Offer valid for new customers only. Cannot be combined with other promotions. Expires \[2025-12-31\].*