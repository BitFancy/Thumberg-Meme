'use client';

import toast from 'react-hot-toast';
import { FiClipboard } from 'react-icons/fi';

export default function CopyButton({ value }: { value: string }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success('Copied to clipboard');
      })
      .catch(() => {
        toast.error('Oops! Something went wrong');
      });
  };
  return (
    <button
      type='button'
      className='js-clipboard p-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-500 bg-gray-500 text-white shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      onClick={copyToClipboard}
    >
      <FiClipboard className='size-4' />
      <span className='copy-text'>copy</span>
    </button>
  );
}
