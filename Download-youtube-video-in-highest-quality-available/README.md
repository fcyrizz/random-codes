## Dependency
```
pip install yt-dlp
```
## Code
```
from yt_dlp import YoutubeDL

def download_youtube_video(url, output_path='.'):
    try:
        # Set options for yt-dlp
        ydl_opts = {
            'format': 'bestvideo[height<=2160][fps<=60]+bestaudio/best',  # Prioritize 4K 60FPS
            'outtmpl': f'{output_path}/%(title)s.%(ext)s',  # Save file with title as name
            'merge_output_format': 'mp4',  # Merge video and audio into mp4
        }

        # Download the video
        with YoutubeDL(ydl_opts) as ydl:
            print(f"Downloading: {url}...")
            ydl.download([url])
            print("Download completed!")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # URL of the YouTube video
    video_url = "https://www.youtube.com/watch?v=UIME7yWsjrk"
    
    # Download the video without asking for the output directory
    download_youtube_video(video_url)
```
