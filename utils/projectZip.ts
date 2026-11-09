import JSZip from 'jszip';

// Using Vite's glob import to bundle project source files as raw text strings
const rawFiles = import.meta.glob<string>(
  [
    '../App.tsx',
    '../constants.ts',
    '../types.ts',
    '../index.html',
    '../index.tsx',
    '../index.css',
    '../package.json',
    '../tsconfig.json',
    '../vite.config.ts',
    '../README.md',
    '../.gitignore',
    '../components/*.tsx',
    '../.github/workflows/*.yml'
  ],
  { query: '?raw', eager: true, import: 'default' }
);

export async function downloadProjectZip() {
  const zip = new JSZip();

  for (const [path, content] of Object.entries(rawFiles)) {
    // Strip leading '../'
    const cleanPath = path.replace(/^\.\.\//, '');
    if (typeof content === 'string') {
      zip.file(cleanPath, content);
    }
  }

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'calculadora-doses-emergencia.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
