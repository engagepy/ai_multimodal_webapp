import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionRow = ({ onPromptClick }) => {
  const prompts = [
    "Feeling stressed about exams?",
    "Struggling with friendship issues?",
    "Dealing with family pressure?",
    "Feeling low or anxious?",
  ];

  return (
    <div className="flex flex-row flex-wrap justify-start items-center py-4 gap-2">
      {/* {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))} */}
      <button
        onClick={() => onPromptClick(prompts[0])}
        className="prompt-button3 text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline"
      >
        {prompts[0]}
      </button>
      <button
        onClick={() => onPromptClick(prompts[1])}
        className="prompt-button text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline"
      >
        {prompts[1]}
      </button>
      <button
        onClick={() => onPromptClick(prompts[2])}
        className="prompt-button2 text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline"
      >
        {prompts[2]}
      </button>
      <button
        onClick={() => onPromptClick(prompts[3])}
        className="prompt-button1 text-sm py-2 px-4 rounded-lg overflow-hidden whitespace-nowrap focus:outline-none focus:shadow-outline"
      >
        {prompts[3]}
      </button>
    </div>
  );
};

export default PromptSuggestionRow;
