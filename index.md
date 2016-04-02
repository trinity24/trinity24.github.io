---
layout: default
---

<img src="/assets/whp.png" alt="whp" style="float: left; margin: 20px">

90% of the posts on *with high probability* focus on topics in combinatorics or theoretical computer science (these are areas of math). Some of these subjects will be accessible to most everyone, some will require a low level of mathematical maturity, and some will require a working knowledge of methods used in combinatorics and TCS. I try to label the posts accordingly with difficulties **(1) (2) (3)**, but this scale is likely to appear arbitrary to you.

Many of these posts contain examples and proofs, for those who are interested in a deeper explanation of a subject. The sections necessary to understanding the barebones of a post will have an (*) next to them.

 The other 10% of posts on this site will be a hodge-podge of baking, yoga, food, baking, pineapple paraphernalia, etc.

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
