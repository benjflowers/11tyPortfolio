---
layout: base.njk
title: "Hey I am Ben"
templateEngineOverride: njk, md
---

![hero](/images/hero.png)

{% for section in collections.sections %}
{{ section.data.title }}
{{ section.templateContent | safe }}
<hr/>
{% endfor %}
