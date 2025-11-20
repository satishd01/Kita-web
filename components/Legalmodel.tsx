// components/LegalModal.tsx
import { FC } from 'react';
import { FiX } from 'react-icons/fi';

interface Props {
  title: 'Privacy Policy' | 'Terms of Service';
  content: string;
  onClose: () => void;
}

const LegalModal: FC<Props> = ({ title, content, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-2xl max-h-[80vh] bg-[#0e3c39] text-white rounded-xl shadow-2xl flex flex-col"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
    >
      {/* header */}
      <div className="flex items-center justify-between p-5 border-b border-white/20">
        <h3 className="text-xl font-bold">{title}</h3>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Close"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>

      {/* body */}
      <pre className="flex-1 overflow-y-auto p-6 whitespace-pre-wrap font-sans text-sm leading-relaxed">
        {content}
      </pre>

      {/* footer */}
      <div className="p-4 border-t border-white/20">
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default LegalModal;