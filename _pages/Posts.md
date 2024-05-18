---
permalink: /posts/
title: "Posts"
excerpt: "Arian"
author_profile: true
redirect_from: 
  - /posts
  - /posts.html
  
---
<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/mylib.css">
{% for post in site.posts %}
<div class="post-item">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <span class="post-meta">
    <i class="fas fa-calendar-alt"></i> {{ post.date | date: "%B %-d, %Y" }}
  </span>
</div>
{% endfor %}

