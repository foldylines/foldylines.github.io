---
layout: page
title: 'Weekly Comics'
---

<div class="gallery">
{% assign comics = site.static_files | where_exp: "file", "file.path contains 'assets/img/dumb comics/' and file.path contains 'p1'" %}
  {% for comic in comics %}
    {% assign parts = comic.path | split: '/' %}
    {% assign comic_name = parts[4] %}
    <a href="{{ site.github.url }}/projects/weekly-comic-pages/{{ comic_name }}" class="gallery-item">
      <img src="{{ site.github.url }}{{ comic.path }}" alt="{{ comic_name }}">
    </a>
  {% endfor %}
</div>