---
---
{%- for component in site.data.components -%}
    {% if component.js != nil %}
        {%- include {{component.js}} -%}
    {% endif %}
{%- endfor -%}