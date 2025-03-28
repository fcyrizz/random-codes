import { KokoroTTS } from "kokoro-js";
import { writeFileSync, unlinkSync, readFileSync } from "fs";
import { execSync } from "child_process";

// Function to generate speech for each sentence
async function generateSpeech(tts, sentence, index) {
    console.log(`Generating audio for sentence ${index + 1}...`);
    const audio = await tts.generate(sentence.trim(), { voice: "af_bella" });

    const fileName = `temp_${index}.wav`;
    await audio.save(fileName);
    console.log(`Saved: ${fileName}`);
    return fileName;
}

// Function to delete temporary files
function deleteTempFiles(files) {
    console.log("Cleaning up temporary files...");
    files.forEach(file => {
        try {
            unlinkSync(file);
            console.log(`Deleted: ${file}`);
        } catch (err) {
            console.warn(`Failed to delete ${file}: ${err.message}`);
        }
    });
}

async function runTTS() {
    const model_id = "onnx-community/Kokoro-82M-ONNX";
    const tts = await KokoroTTS.from_pretrained(model_id, { dtype: "q8" });

    // Read text from input.txt
    const text = readFileSync("input.txt", "utf-8").trim();
    if (!text) {
        console.error("Error: input.txt is empty!");
        return;
    }

    // Split text into sentences
    const sentences = text.split(".").filter(s => s.trim().length > 0);

    // Generate audio for each sentence
    let audioFiles = [];
    for (let i = 0; i < sentences.length; i++) {
        const file = await generateSpeech(tts, sentences[i] + ".", i);
        audioFiles.push(file);
    }

    console.log("Combining all audio files into output.wav...");

    // Create a file list for FFmpeg
    const listFile = "file_list.txt";
    writeFileSync(listFile, audioFiles.map(f => `file '${f}'`).join("\n"));

    // Run FFmpeg to merge audio files
    execSync(`ffmpeg -f concat -safe 0 -i ${listFile} -c copy output.wav`);

    console.log("Final output saved as output.wav");

    // Delete temporary audio files
    deleteTempFiles(audioFiles);
    deleteTempFiles([listFile]);
}

runTTS().catch(console.error);
