---
layout: default
---

<img src="/assets/whp.png" alt="whp" style="float: left; margin: 10px">

75% of the posts on *with high probability* focus on topics in combinatorics, probability, and theoretical computer science (these are areas of math).

Some of these subjects will be accessible to most everyone, some will require a low level of mathematical maturity, and some will require a working knowledge of methods used in combinatorics and TCS. These posts are labeled accordingly with difficulties **(1) (2) (3)**, but this scale is likely to appear arbitrary to you.

The other 25% of posts on this site will be a hodge-podge of baking, yoga, food, baking, pineapple paraphernalia, etc.

 <br>

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
        <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
      </li>
    {% endfor %}
  </ul>

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl}}">via RSS</a></p>
