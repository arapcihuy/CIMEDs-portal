import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'ID' | 'EN';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (id: string, en: string) => string;
}

// Detect browser language
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'ID';
  
  const browserLang = navigator.language.toLowerCase();
  
  // Check if browser language is Indonesian
  if (browserLang.startsWith('id')) {
    return 'ID';
  }
  
  // Default to English for all other languages
  return 'EN';
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: detectBrowserLanguage(),
      setLanguage: (lang) => {
        set({ language: lang });
        // Save to localStorage
        localStorage.setItem('cimeds-language', lang);
      },
      t: (id, en) => (get().language === 'ID' ? id : en),
    }),
    {
      name: 'cimeds-language-storage',
    }
  )
);
