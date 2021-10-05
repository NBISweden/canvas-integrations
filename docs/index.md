---
---
## About 
This is a simple proof of concept to illustrate how the Stylesheet and JavaScript parts of
the NBIS theme for Studium could be managed using GitHub pages rendered from the /docs folder
in the main branch of this repository.

* The contents of the docs folder is structured as a Jekyll site
* _data/components.yml – describes each component that should be included in the NBIS Theme
    with a name, optional js and optional css keys.
* _examples/*.md – examples of the content that would be rendered in Studium
* _includes/* – contains the js / css files that will be concatenated for the theme
* _layout/* – page layouts that can be used in the examples to render content in the Studium layout
* nbis-scripts.js – concatenates the js files referenced in _data/components.yml
* nbis-styles.scss – concatenates the css files referenced in _data/components.yml

## NBIS theme for Studium
Download the files here: 
- Stylesheet: [nbis-styles.css](.{% link nbis-styles.scss %})
- JavaScript: [nbis-scripts.js](.{% link nbis-scripts.js %})

## Example pages

{% for example in site.examples %}
* [{{ example.title }}](.{{ example.url }})
{% endfor %}