---
layout: default
title: Category
permalink: /categories/
---

<h1>📁 카테고리</h1>
<ul>
  {% assign categories = site.posts | map: "categories" | join: "," | split: "," | uniq | sort %}
  {% for category in categories %}
    {% if category != "" and category != "blog" %}
      <li><a href="/categories/{{ category | downcase | slugify }}/">{{ category }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
