# Code
```
import os
from pydub import AudioSegment
from pydub.silence import detect_nonsilent

class AudioProcessor:
    def __init__(self, input_file_path, format):
        self.input_file_path = input_file_path
        self.audio = AudioSegment.from_file(input_file_path, format=format)

    def split_audio_by_silence(self, min_silence_len, threshold):
        return detect_nonsilent(self.audio, min_silence_len=min_silence_len, silence_thresh=threshold)

    def save_audio(self, audio, output_path):
        audio.export(output_path, format="mp3")
        print(f"Saved non-silent audio to {output_path}")

    def process_audio(self, min_silence_len=100, threshold=-30, output_folder='output'):
        try:
            print("Processing audio...")
            non_silent_parts = self.split_audio_by_silence(min_silence_len, threshold)
            audio_non_silent = AudioSegment.empty()

            for start_time, end_time in non_silent_parts:
                audio_non_silent += self.audio[start_time:end_time]

            os.makedirs(output_folder, exist_ok=True)
            output_non_silent_path = os.path.join(output_folder, 'interview_non_silent.mp3')
            self.save_audio(audio_non_silent, output_non_silent_path)

        except Exception as e:
            print("Error:", str(e))

def main():
    input_file = 'audio.wav'  # Input file path
    format = 'wav'            # Input file format
    processor = AudioProcessor(input_file, format)
    processor.process_audio(min_silence_len=100, threshold=-60, output_folder='output')

if __name__ == "__main__":
    main()

```

## Requirements
```
pip install pydub audioop-lts
```
