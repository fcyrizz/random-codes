from __future__ import unicode_literals
import yt_dlp
import json
import os

# Load video IDs from JSON file
with open('videos.json', 'r') as file:
    video_ids = json.load(file)

# Create a directory to save downloaded audio files
output_dir = "videos"
os.makedirs(output_dir, exist_ok=True)

# Download options
ydl_opts = {
    'format': 'bestaudio/best',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
    'outtmpl': os.path.join(output_dir, 'VIDEO_%(index)d.%(ext)s'),
}

# Download each video in a loop
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    for index, video_id in enumerate(video_ids, start=1):
        video_url = f"https://www.youtube.com/watch?v={video_id}"
        ydl_opts['outtmpl'] = os.path.join(output_dir, f'VIDEO_{index}.mp3')
        ydl.download([video_url])
