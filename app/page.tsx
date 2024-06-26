"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Bubble from "../components/Bubble";
import { useChat, Message } from "ai/react";
import Footer from "../components/Footer";
import Configure from "../components/Configure";
import PromptSuggestionRow from "../components/PromptSuggestions/PromptSuggestionsRow";
import ThemeButton from "../components/ThemeButton";
import useConfiguration from "./hooks/useConfiguration";
import { UserButton } from "@clerk/nextjs";
import { Mic, SendHorizontal } from "lucide-react";
import Link from "next/link";

let recorder = null;

export default function Home() {
  const [streamActive, setStreamActive] = useState(true);

  const onFinish = () => {
    setStreamActive(false);
  };
  const { append, messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish,
  });
  const { useRag, llm, similarityMetric, setConfiguration } = useConfiguration();

  const messagesEndRef = useRef(null);
  const [configureOpen, setConfigureOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [timeoutt, setTimeoutt] = useState(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    handleSubmit(e, { options: { body: { useRag, llm, similarityMetric } } });
    setStreamActive(true);
  };

  const handlePrompt = (promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg, { options: { body: { useRag, llm, similarityMetric } } });
  };

  const startRecording = () => {
    let constraints = {
      audio: true,
      video: false,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        let audioContext = new AudioContext();
        console.log("Sample rate: " + audioContext.sampleRate);

        let gumStream = stream;
        let input = audioContext.createMediaStreamSource(stream);
        console.log(
          "Media stream created. Sample rate of input stream: " +
            audioContext.sampleRate
        );

        recorder = new MediaRecorder(stream);
        let chunks = [];

        recorder.ondataavailable = function (e) {
          chunks.push(e.data);
        };

        recorder.onstop = function (e) {
          let blob = new Blob(chunks, { type: "audio/wav; codecs=opus" });
          // Now you can do something with the recorded audio blob, like saving it or processing it.
          console.log("Recording stopped");
          console.log(blob);
          onStop(blob);
        };

        recorder.start();
        console.log("Recording started");
      })
      .catch(function (err) {
        console.log("Error in getUserMedia: " + err);
      });
  };

  const stopRecording = () => {
    console.log("stopButton clicked");

    recorder.stop(); //stop microphone access
    setIsRecording(false);
  };

  const sendAudio = async (audio) => {
    const response = await fetch("/api/audio1", {
      method: "POST",
      body: audio,
    });
    const data = await response.json();
    const msg: Message = {
      id: crypto.randomUUID(),
      content: data.transcription,
      role: "user",
    };
    append(msg, { options: { body: { useRag, llm, similarityMetric } } });
  };

  const onStop = (blob) => {
    console.log("uploading...");

    let data = new FormData();

    data.append("text", "this is the transcription of the audio file");
    data.append("wavfile", blob, "recording.wav");

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    sendAudio(data);
  };

  const [showMicHover, setShowMicHover] = useState(true);

  const handleMicrophoneClick = () => {
    console.log("Microphone clicked", isRecording);
    if (isRecording) {
      setIsRecording(false);
      stopRecording();
      clearTimeout(timeoutt);
      console.log("Timeout cleared");
      setShowNotification(false);
    } else {
      setShowNotification(true);
      setIsRecording(true);
      startRecording();
      setTimeoutt(
        setTimeout(() => {
          setShowNotification(false);
          stopRecording();
        }, 30000)
      );
    }
    setShowMicHover(false);
  };

  return (
    <>
      {/* Notification */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${
          showNotification ? "translate-y-0" : "-translate-y-20"
        } z-50 transition-all bg-yellow-500 text-white py-2 px-4 rounded-md shadow-lg`}
      >
        Recording...
      </div>
      <main className="flex h-screen flex-col items-center justify-center">
        <section className="chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full rounded-md p-2 md:p-6">
          <div className="chatbot-header pb-6">
            <div className="flex justify-between">
            
            <div className="flex items-center gap-2">
              <Link href="https://astratechz.com" target="_blank" rel="noopener noreferrer" passHref>
  
                  <Image
                    src="/atz_logo.png"
                    className="w-10 h-4 sm:w-15 sm:h-5 md:w-25 md:h-7"
                    width="40"
                    height="40"
                    alt="Logo"
                  />
                
              </Link>
            </div>

              <div className="flex gap-1">
                <ThemeButton />
                <button onClick={() => setConfigureOpen(true)}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.14 13.4006C19.18 13.1006 19.2 12.7906 19.2 12.4606C19.2 12.1406 19.18 11.8206 19.13 11.5206L21.16 9.94057C21.34 9.80057 21.39 9.53057 21.28 9.33057L19.36 6.01057C19.24 5.79057 18.99 5.72057 18.77 5.79057L16.38 6.75057C15.88 6.37057 15.35 6.05057 14.76 5.81057L14.4 3.27057C14.36 3.03057 14.16 2.86057 13.92 2.86057H10.08C9.83999 2.86057 9.64999 3.03057 9.60999 3.27057L9.24999 5.81057C8.65999 6.05057 8.11999 6.38057 7.62999 6.75057L5.23999 5.79057C5.01999 5.71057 4.76999 5.79057 4.64999 6.01057L2.73999 9.33057C2.61999 9.54057 2.65999 9.80057 2.85999 9.94057L4.88999 11.5206C4.83999 11.8206 4.79999 12.1506 4.79999 12.4606C4.79999 12.7706 4.81999 13.1006 4.86999 13.4006L2.83999 14.9806C2.65999 15.1206 2.60999 15.3906 2.71999 15.5906L4.63999 18.9106C4.75999 19.1306 5.00999 19.2006 5.22999 19.1306L7.61999 18.1706C8.11999 18.5506 8.64999 18.8706 9.23999 19.1106L9.59999 21.6506C9.64999 21.8906 9.83999 22.0606 10.08 22.0606H13.92C14.16 22.0606 14.36 21.8906 14.39 21.6506L14.75 19.1106C15.34 18.8706 15.88 18.5506 16.37 18.1706L18.76 19.1306C18.98 19.2106 19.23 19.1306 19.35 18.9106L21.27 15.5906C21.39 15.3706 21.34 15.1206 21.15 14.9806L19.14 13.4006ZM12 16.0606C10.02 16.0606 8.39999 14.4406 8.39999 12.4606C8.39999 10.4806 10.02 8.86057 12 8.86057C13.98 8.86057 15.6 10.4806 15.6 12.4606C15.6 14.4406 13.98 16.0606 12 16.0606Z" />
                  </svg>
                </button>
                <UserButton />
              </div>
            </div>
            <p className="chatbot-text-secondary-inverse text-center text-sm md:text-base mt-2 md:mt-4">
              Make{" "}
              <span className="text-[var(--text-primary-main)]">mental health</span>{" "}
              a breeze at your organisation or institute. Chat is{" "}
              <span className="text-[var(--text-primary-main)]">100% anonymous.</span>
            </p>
            <p className="chatbot-text-secondary-inverse text-center text-sm md:text-base mt-2 md:mt-4">
              <span className="text-[var(--text-primary-main)] inline-block overflow-hidden whitespace-nowrap animate-typewriter">
                Simply state your questions or dilemmas.
              </span>
            </p>
          </div>
          <div className="flex-1 relative overflow-y-auto my-4 md:my-6">
            <div className="absolute w-full overflow-x-hidden">
              {messages.map((message, index) => (
                <div key={index}>
                  <Bubble
                    ref={messagesEndRef}
                    key={`message-${index}`}
                    content={message}
                    isActive={streamActive}
                  />
                </div>
              ))}
            </div>
          </div>
          {!messages ||
            (messages.length === 0 && (
              <PromptSuggestionRow onPromptClick={handlePrompt} />
            ))}
          <form className="flex h-[40px] gap-2" onSubmit={handleSend}>
            <input
              onChange={handleInputChange}
              value={input}
              className="chatbot-input flex-1 text-sm md:text-base outline-none bg-transparent rounded-md p-2"
              placeholder="Send a message..."
            />

            {/* Send Button */}
            <button
              type="submit"
              className="chatbot-send-button flex rounded-md items-center justify-center px-2.5"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  fill="yellow"
                  stroke="black"
                  strokeWidth="0.5"
                  d="M2.925 5.025L9.18333 7.70833L2.91667 6.875L2.925 5.025ZM9.175 12.2917L2.91667 14.975V13.125L9.175 12.2917ZM1.25833 2.5L1.25 8.33333L13.75 10L1.25 11.6667L1.25833 17.5L18.75 10L1.25833 2.5Z"
                />
              </svg>
            </button>

            {/* Record Button */}
            <div className="relative">
              <button
                type="button"
                onClick={handleMicrophoneClick}
                className="chatbot-record-button flex rounded-md items-center justify-center px-2.5"
              >
                {isRecording ? (
                  <Mic
                    color="green"
                    className="chatbot-text-secondary-inverse text-green"
                  />
                ) : (
                  <Mic className="chatbot-text-secondary-inverse" />
                )}
              </button>
              {showMicHover && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-1 text-xs text-center text-white bg-gray-800 rounded-md shadow-lg w-24 sm:w-20 md:w-24 lg:w-28 xl:w-32">

                  Click to speak, click again to send. Max 30 seconds.
                </div>
              )}
            </div>
          </form>

          <Footer />
        </section>
      </main>
      <Configure
        isOpen={configureOpen}
        onClose={() => setConfigureOpen(false)}
        useRag={useRag}
        llm={llm}
        similarityMetric={similarityMetric}
        setConfiguration={setConfiguration}
      />
    </>
  );
}
