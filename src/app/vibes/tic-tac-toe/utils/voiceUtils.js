/**
 * Voice Utility functions using Web Speech API.
 */

export const isSpeechSupported = () => 
  typeof window !== 'undefined' && 
  ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);

/**
 * Starts listening for voice commands.
 * @param {Function} onResult - Callback when speech is recognized.
 * @param {Function} onEnd - Callback when listening ends.
 */
export const startListening = (onResult) => {
  if (!isSpeechSupported()) {
    console.warn("Speech Recognition not supported.");
    return null;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  recognition.continuous = true;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const lastResultIndex = event.results.length - 1;
    const text = event.results[lastResultIndex][0].transcript;
    console.log("Voice recognized:", text);
    onResult(text);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
  };

  recognition.start();
  return recognition;
};

/**
 * Browser speaks the provided text.
 * @param {String} text - Text to speak.
 */
export const speak = (text) => {
  if (!('speechSynthesis' in window)) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
};
