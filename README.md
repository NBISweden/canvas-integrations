This repository is used as the code base for all the functionality related to the transition to the Canvas LMS.

## Automated transition and syncing of content from GitHub to Canvas

https://github.com/learn-co-curriculum/github-to-canvas/


## Moving Markdown files to Canvas
The method below was put together by us in NBIS.

### Transform Markdown to html

In order to move a markdown file from github pages to canvas, the markdown file needs to be transformed to html. That can be achieved using the docker version of `pandoc`.
The following command will mount the current folder in the `pandoc` container and transform the `<input_file>.md` file to the `<output_file>.html`:
```bash
docker run --rm --volume "`pwd`:/data" --user `id -u`:`id -g` pandoc/latex <input_file.md> -o <output_file.html>
```

### Create personal token for Canvas API
The Canvas LMS provides an [API](https://canvas.instructure.com/doc/api/), which can be used for creating/updating/deleting pages (and much more). To create a page with the html file produced in the previous step, a personal token needs to be created in the Canvas UI. Detailed instructions for creating a personal token can be found [here](https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation).

In summary:
* Click the "profile" link in the top right menu bar, or navigate to /profile
* In the profile "Settings" under the "Approved Integrations" section, click the button to generate a new access token.
* Once the token is generated, you cannot view it again, and you'll have to generate a new token if you forget it. Remember that access tokens are password equivalent, so keep it secret.


### Create a Canvas page using the API
Finally, to create the page with the html file run the following command, replacing the `personal_token` with the one created in the previous step:

```bash
curl -X POST --header 'Authorization: Bearer <personal_token>' https://uppsala.instructure.com/api/v1/courses/<course_number>/pages -d wiki_page[title]=<page_title> -d wiki_page[body]="$(cat <output_file>.html)"
```

## Additional libraries
- https://github.com/ucfopen/canvasapi
- https://github.com/gqmaguirejr/Canvas-tools
