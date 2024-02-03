import Link from "next/link";
import { forwardRef, JSXElementConstructor, useMemo, RefObject } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Volume2 } from "lucide-react";

const Bubble: JSXElementConstructor<any> = forwardRef(function Bubble(
  { content, isActive },
  ref
) {
  const { role } = content;
  const isUser = role === "user";

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
    fetch("/api/audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: [content] }),
    }).then((data) => {
      playReceivedAudioStream(data);
    });
  };

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={`block mt-4 md:mt-6 pb-[7px] clear-both ${
        isUser ? "float-right" : "float-left"
      }`}
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
                code({ node, children, ...props }) {
                  return <code {...props}>{children}</code>;
                },
              }}
            >
              {content?.content}
            </Markdown>
          )}
        </div>
        {isUser
          ? null
          : isActive == false && (
              <button
                onClick={handleAudio}
                className="chatbot-record-button flex rounded-md items-center justify-center px-2.5"
              >
                <Volume2 />
              </button>
            )}
      </div>
      {content.url ? (
        <div className="flex justify-end mt-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">Source:</span>
            <Link href={content?.url} target="_blank">
              <div className="chatbot-faq-link flex items-center px-2 py-0.5">
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
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default Bubble;
