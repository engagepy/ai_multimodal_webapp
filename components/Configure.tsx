import { useState } from "react";
import Dropdown from "./Dropdown";
import Toggle from "./Toggle";
import Footer from "./Footer";
import { SimilarityMetric } from "../app/hooks/useConfiguration";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  useRag: boolean;
  llm: string;
  similarityMetric: SimilarityMetric;
  setConfiguration: (useRag: boolean, llm: string, similarityMetric: SimilarityMetric) => void;
}

const Configure = ({ isOpen, onClose, useRag, llm, similarityMetric, setConfiguration }: Props) => {
  const [rag, setRag] = useState(useRag);
  const [selectedLlm, setSelectedLlm] = useState(llm);
  const [selectedSimilarityMetric, setSelectedSimilarityMetric] = useState<SimilarityMetric>(similarityMetric);
  
  if (!isOpen) return null;

  const llmOptions = [
    { label: 'Angry', value: 'gpt-4' },
    { label: 'Depressed', value: 'gpt-4' },
    { label: 'Sad', value: 'gpt-4' },
    { label: 'Happy', value: 'gpt-4' },
    { label: 'Anxious', value: 'gpt-4' },
    { label: 'Lonely', value: 'gpt-4' },

  ];

  const similarityMetricOptions = [
    { label: 'Community', value: 'cosine' },
    { label: 'Councellor', value: 'euclidean' },
    { label: 'Top Secret', value: 'dot_product' }
  ];

  const handleSave = () => {
    setConfiguration(
        rag,
        selectedLlm,
        selectedSimilarityMetric
    );
    onClose();
  };

  return (
    <div className={`configure-modal-bg fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50`}>
      <div className="chatbot-section configure-modal-bg flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full p-6 rounded shadow-lg overflow-auto">
        <div className="grow">
          <div className='pb-6 flex justify-between'>
            <h1 className='configure-header chatbot-text-primary text-xl md:text-2xl font-medium'>Configure</h1>
            <button
              onClick={onClose}
              className="configure-close-btn chatbot-text-primary text-4xl font-thin leading-8"
            >
              <span aria-hidden>×</span>
            </button>
          </div>
          <div className="flex mb-4">
            <Dropdown
              fieldId="llm"
              label="Feeling:"
              options={llmOptions}
              value={selectedLlm}
              onSelect={setSelectedLlm}
            />
            <Toggle enabled={rag} label="Enable Positivity Nudges" onChange={() => setRag(!rag)} />
          </div>
          <Dropdown
            fieldId="similarityMetric"
            label="Sharing with:"
            options={similarityMetricOptions}
            value={selectedSimilarityMetric}
            onSelect={setSelectedSimilarityMetric}
          />
        </div>
        <div className="self-end w-full">
          <div className="flex justify-end gap-2">
            <button
              className='configure-button-secondary chatbot-button-secondary flex rounded-md items-center justify-center px-2.5 py-3'
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className='configure-button-primary chatbot-button-primary flex rounded-md items-center justify-center px-2.5 py-3'
              onClick={handleSave}
            >
              Save Configuration
            </button>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Configure;
