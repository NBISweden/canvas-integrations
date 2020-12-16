# canvas-integrations-playground

Mihail’s examples from the NBIS Training meeting 16 December 2020:
```{bash}
curl -X PUT -H ‘Authorization: Bearer <your-token-here>’ https://uppsala.instructure.com/api/v1/courses/3910/pages/html-slides | jq ‘.’
curl -X POST -H ‘Authorization: Bearer <your-token-here>’  https://uppsala.instructure.com/api/v1/courses/3910/pages -d ‘wiki_page[title]=New+page’ -d ‘wiki_page[body]=New+body+text’ | jq ‘.’
```
