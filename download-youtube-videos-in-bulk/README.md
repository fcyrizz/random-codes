# Download bulk youtube videos with python and ytdlp
## For Youtube Videos
### Extract Youtube Videos IDs with JS Console
```js
(function() {
  try {
    const links = [];

    // Locate the #primary container
    const primary = document.querySelector('#primary.style-scope.ytd-two-column-browse-results-renderer');
    if (!primary) throw new Error('Primary container not found');

    // Find ytd-rich-grid-renderer inside primary
    const gridRenderer = primary.querySelector('ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer');
    if (!gridRenderer) throw new Error('ytd-rich-grid-renderer not found');

    // Inside gridRenderer, find #contents
    const contents = gridRenderer.querySelector('#contents');
    if (!contents) throw new Error('#contents not found');

    // Find all ytd-rich-item-renderer elements
    const items = contents.querySelectorAll('ytd-rich-item-renderer');

    items.forEach(item => {
      const anchor = item.querySelector('#meta > h3 > a');
      if (anchor && anchor.href) {
        links.push(anchor.href);
      }
    });

    if (links.length === 0) {
      alert('No links found!');
      return;
    }

    // Convert links to plain text
    const blob = new Blob([links.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shorts_url.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the blob URL to free up memory
    URL.revokeObjectURL(url);
    console.log('Download initiated for shorts_url.txt');

  } catch (err) {
    console.error('Error:', err.message);
  }
})();
```
## Get Youtube Video Title with JS Console
```js
(function() {
  try {
    const links = [];

    // Locate the #primary container
    const primary = document.querySelector('#primary.style-scope.ytd-two-column-browse-results-renderer');
    if (!primary) throw new Error('Primary container not found');

    // Find ytd-rich-grid-renderer inside primary
    const gridRenderer = primary.querySelector('ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer');
    if (!gridRenderer) throw new Error('ytd-rich-grid-renderer not found');

    // Inside gridRenderer, find #contents
    const contents = gridRenderer.querySelector('#contents');
    if (!contents) throw new Error('#contents not found');

    // Find all ytd-rich-item-renderer elements
    const items = contents.querySelectorAll('ytd-rich-item-renderer');

    items.forEach(item => {
      const anchor = item.querySelector('#meta > h3 > a');
      if (anchor && anchor.title) {
        links.push(anchor.title);
      }
    });

    if (links.length === 0) {
      alert('No links found!');
      return;
    }

    // Convert links to plain text
    const blob = new Blob([links.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shorts_title.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the blob URL to free up memory
    URL.revokeObjectURL(url);
    console.log('Download initiated for shorts_title.txt');

  } catch (err) {
    console.error('Error:', err.message);
  }
})();
```

## For Youtube Shorts
### Extract Youtube Shorts IDs with js console
```js
(function() {
  try {
    const ids = [];

    // Locate the #primary container
    const primary = document.querySelector('#primary.style-scope.ytd-two-column-browse-results-renderer');
    if (!primary) throw new Error('Primary container not found');

    // Find ytd-rich-grid-renderer inside primary
    const gridRenderer = primary.querySelector('ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer');
    if (!gridRenderer) throw new Error('ytd-rich-grid-renderer not found');

    // Inside gridRenderer, find #contents
    const contents = gridRenderer.querySelector('#contents');
    if (!contents) throw new Error('#contents not found');

    // Find all ytd-rich-item-renderer elements
    const items = contents.querySelectorAll('ytd-rich-item-renderer');

    items.forEach(item => {
      const anchor = item.querySelector('#content > ytm-shorts-lockup-view-model-v2 > ytm-shorts-lockup-view-model > a');
      if (anchor && anchor.href) {
        const match = anchor.href.match(/\/shorts\/([\w-]+)/);
        if (match && match[1]) {
          ids.push(match[1]);
        }
      }
    });

    if (ids.length === 0) {
      alert('No video IDs found!');
      return;
    }

    // Create a blob with just the video IDs
    const blob = new Blob([ids.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shorts_ids.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up the blob URL
    URL.revokeObjectURL(url);
    console.log('Download initiated for shorts_ids.txt');

  } catch (err) {
    console.error('Error:', err.message);
  }
})();
```

### Get the Shorts Title
```js
(function() {
  try {
    const links = [];

    // Locate the #primary container
    const primary = document.querySelector('#primary.style-scope.ytd-two-column-browse-results-renderer');
    if (!primary) throw new Error('Primary container not found');

    // Find ytd-rich-grid-renderer inside primary
    const gridRenderer = primary.querySelector('ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer');
    if (!gridRenderer) throw new Error('ytd-rich-grid-renderer not found');

    // Inside gridRenderer, find #contents
    const contents = gridRenderer.querySelector('#contents');
    if (!contents) throw new Error('#contents not found');

    // Find all ytd-rich-item-renderer elements
    const items = contents.querySelectorAll('ytd-rich-item-renderer');

    items.forEach(item => {
      const anchor = item.querySelector('#content > ytm-shorts-lockup-view-model-v2 > ytm-shorts-lockup-view-model > div > h3 > a');
      if (anchor && anchor.title) {
        links.push(anchor.title);
      }
    });

    if (links.length === 0) {
      alert('No links found!');
      return;
    }

    // Convert links to plain text
    const blob = new Blob([links.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shorts_title.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the blob URL to free up memory
    URL.revokeObjectURL(url);
    console.log('Download initiated for shorts_title.txt');

  } catch (err) {
    console.error('Error:', err.message);
  }
})();
```

