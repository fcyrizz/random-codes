# Download bulk youtube videos with python and ytdlp
```python
from yt_dlp import YoutubeDL

def download_best_video(video_url, output_path='.'):
    """Download the best quality video (video + audio)."""
    try:
        ydl_opts = {
            'format': 'bestvideo+bestaudio/best',  # Highest quality with audio
            'outtmpl': f'{output_path}/%(title)s.%(ext)s',
            'merge_output_format': 'mp4',
            'quiet': False,
        }

        with YoutubeDL(ydl_opts) as ydl:
            print(f"\nDownloading: {video_url}")
            ydl.download([video_url])
            print("Download completed!\n")

    except Exception as e:
        print(f"Error downloading {video_url}: {e}")

def main():
    try:
        with open('input.txt', 'r') as file:
            video_ids = [line.strip() for line in file if line.strip()]
        
        if not video_ids:
            print("No video IDs found in input.txt.")
            return

        for video_id in video_ids:
            url = f"https://www.youtube.com/watch?v={video_id}"
            download_best_video(url)

    except FileNotFoundError:
        print("input.txt not found. Please make sure the file exists in the script directory.")
    except Exception as e:
        print(f"Unexpected error: {e}")

if __name__ == "__main__":
    main()

```
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

