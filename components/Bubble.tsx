import Link from "next/link";
import { forwardRef, useState, useEffect, LegacyRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Volume2 } from "lucide-react";
import { ClipLoader } from "react-spinners";

const Bubble = forwardRef(function Bubble({ content, isActive }: { content: any, isActive: boolean }, ref) {
  const isUser = content.role === "user";
  const [isLoading, setIsLoading] = useState(false);
  const [displayedContent, setDisplayedContent] = useState<string>("");

  useEffect(() => {
    // Immediately set the displayed content to the full message
    // This removes the character-by-character display logic
    setDisplayedContent(content.content || "");
  }, [content.content]);

  const playReceivedAudioStream = async (audioData: any) => {
    try {
      if (!audioData) {
        console.error("Received undefined audio data");
        return;
      }

      const audioContext = new (window.AudioContext || window.AudioContext)();

      // Convert audioData to ArrayBuffer
      const arrayBuffer = await audioData.arrayBuffer();

      // Create an audio buffer from the ArrayBuffer
      audioContext.decodeAudioData(arrayBuffer, (buffer) => {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
      });
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleAudio = () => {
    setIsLoading(true);
    fetch("/api/audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: [content] }),
    }).then((data) => {
      setIsLoading(false);
      playReceivedAudioStream(data);
    });
  };

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className={`block mt-4 md:mt-6 pb-[7px] clear-both ${isUser ? "float-right" : "float-left"}`}
    >
      <div className="flex justify-end">
        <div className={`talk-bubble${isUser ? " user" : ""} p-2 md:p-4`}>
          {content.processing ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="dot-flashing" />
            </div>
          ) : (
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ node, ...props }) => <a style={{ color: 'blue', textDecoration: 'underline' }} {...props} />
              }}
            >
              {displayedContent}
            </Markdown>
          )}
        </div>
        {!isUser && isActive == false && (
          <button
            onClick={handleAudio}
            className="chatbot-record-button flex rounded-md items-center justify-center px-2.5"
          >
            {isLoading ? (
              <ClipLoader
                size={20}
                className="chatbot-text-secondary-inverse"
              />
            ) : (
              <Volume2
                size={20}
                className="chatbot-text-secondary-inverse"
              />
            )}
          </button>
        )}
      </div>
      {content.url && (
        <div className="flex justify-end mt-3">
          <Link href={content.url} passHref>
            <a target="_blank" className="chatbot-faq-link flex items-center gap-2 px-2 py-0.5 text-sm">
              <span>Source:</span>
              <div className="flex items-center">
                <svg
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.3333 0.127197H7.66665V1.46053H10.3333C11.4333 1.46053 12.3333 2.36053 12.3333 3.46053C12.3333 4.56053 11.4333 5.46053 10.3333 5.46053H7.66665V6.79386H10.3333C12.1733 6.79386 13.6666 5.30053 13.6666 3.46053C13.6666 1.62053 12.1733 0.127197 10.3333 0.127197ZM6.33331 5.46053H3.66665C2.56665 5.46053 1.66665 4.56053 1.66665 3.46053C1.66665 2.36053 2.56665 1.46053 3.66665 1.46053H6.33331V0.127197H3.66665C1.82665 0.127197 0.333313 1.62053 0.333313 3.46053C0.333313 5.30053 1.82665 6.79386 3.66665 6.79386H6.33331V5.46053ZM4.33331 2.79386H9.66665V4.1272H4.33331V2.79386Z" />
                </svg>
                <span className="text-xs font-semibold pl-1.5">
                  Mental Health FAQs
                </span>
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
});

export default Bubble;
