---
layout: default
---
I'm a second year Ph.D student in the
[Department of Mathematics](https://math.washington.edu) at the 
University of Washington. 
I work between the optimization group in the math department and
the theory group in the [Paul G. Allen School of CSE](https://www.cs.washington.edu).



Before coming to UW, I earned my BS from
[Carnegie Mellon University](http://www.math.cmu.edu/index.php),
and then my Master's degree from [UIC](https://www.math.uic.edu). 


## News

<section id="news">
{% for post in site.posts %}
{% if post.news == true %}
<div class="news-item">
<div class="date"> {{ post.date | date: "%b&nbsp;%-d" }} </div>
<div class="content"> {{ post.content }} </div>
</div>
{% endif %}
{% endfor %}
</section>

## Papers

