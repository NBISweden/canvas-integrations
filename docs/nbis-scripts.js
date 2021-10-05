---
---

{%- for script in site.static_files -%}
    {%- if script.path contains 'js/' -%}
        {%- include_relative js/{{script.name}} -%}
    {%- endif -%}
{%- endfor -%}