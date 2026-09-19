---
permalink: /posts/
title: "Posts"
excerpt: "Arian"
author_profile: true
redirect_from: 
  - /posts
  - /posts.html
---
<link rel="stylesheet" href="{{ '/assets/css/mylib.css' | relative_url }}">

{% assign categories = "Academic Life" | split: "," %}

{% for category in categories %}
## {{ category }}
{% assign posts_in_cat = site.posts | where: "category", category %}
{% if posts_in_cat.size > 0 %}
<ul>
{% for post in posts_in_cat %}
  <li>
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a><br>
    <small>{{ post.date | date: "%B %-d, %Y" }}</small>
  </li>
{% endfor %}
</ul>
{% else %}
<p style="color:#999; font-style:italic;">Coming soon.</p>
{% endif %}
{% endfor %}
