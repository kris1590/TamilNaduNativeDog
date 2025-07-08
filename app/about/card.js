import CardUI from "../components/ui/Card";
import { useState } from "react";

function PawPrintIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  );
}

function XMarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

// Helper function to break down long content into key points
function parseContent(content) {
  // Split content into sentences and identify key points
  const sentences = content.split('. ').filter(s => s.trim().length > 0);
  
  if (sentences.length <= 2) {
    return { summary: content, details: null };
  }
  
  // First sentence as summary, rest as details
  const summary = sentences[0] + (sentences[0].endsWith('.') ? '' : '.');
  const details = sentences.slice(1).map(s => s + (s.endsWith('.') ? '' : '.'));
  
  return { summary, details };
}

// Modal Component
function Modal({ isOpen, onClose, title, content, highlights }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="bg-primary-50 border-b border-primary-200 px-6 py-4 rounded-t-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <PawPrintIcon className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-bold text-primary-900">
                  {title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Full Content */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed text-lg">
                {content}
              </p>
            </div>

            {/* All Key Points */}
            {highlights && highlights.length > 0 && (
              <div className="border-t border-neutral-100 pt-6">
                <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                  Key Points:
                </h4>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-neutral-600 leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card({ characterestics }) {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {characterestics.map((characterestic, index) => {
          const { summary, details } = parseContent(characterestic.content);
          const hasHighlights = characterestic.highlights && characterestic.highlights.length > 0;
          const hasLongContent = details && details.length > 0;
          
          return (
            <CardUI key={characterestic.heading} className="flex flex-col h-full">
              {/* Header */}
              <div className="bg-primary-50 border-b border-primary-200 px-6 py-5">
                <div className="flex items-center justify-center space-x-3">
                  <PawPrintIcon className="h-6 w-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-primary-900 text-center">
                    {characterestic.heading}
                  </h3>
                </div>
              </div>

              {/* Content - Only Summary */}
              <div className="flex-grow p-6 space-y-4">
                {/* Summary Only */}
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {summary}
                </p>
                
                {/* Read More Button - Always show if there's additional content */}
                {(hasHighlights || hasLongContent) && (
                  <div className="border-t border-neutral-100 pt-4">
                    <button
                      onClick={() => setOpenModal(index)}
                      className="w-full bg-primary-50 hover:bg-primary-100 text-primary-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Read Full Details
                    </button>
                  </div>
                )}
              </div>
            </CardUI>
          );
        })}
      </div>

      {/* Modals */}
      {characterestics.map((characterestic, index) => (
        <Modal
          key={`modal-${index}`}
          isOpen={openModal === index}
          onClose={() => setOpenModal(null)}
          title={characterestic.heading}
          content={characterestic.content}
          highlights={characterestic.highlights}
        />
      ))}
    </>
  );
}
