document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const sentenceCount = document.getElementById('sentenceCount');

    function updateCounts() {
        const text = textInput.value.trim();
        
        // Count words
        const words = text === '' ? 0 : text
            .split(/\s+/)
            .filter(word => word.length > 0)
            .length;

        // Count sentences
        const sentences = text === '' ? 0 : text
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim().length > 0)
            .length;

        // Update the display
        wordCount.textContent = `Words: ${words}`;
        sentenceCount.textContent = `Sentences: ${sentences}`;
    }

    textInput.addEventListener('input', updateCounts);
});
