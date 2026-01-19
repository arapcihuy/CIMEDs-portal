import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

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
        // Dispatch custom event for cross-component sync
        window.dispatchEvent(new CustomEvent('language-change', { detail: lang }));
      },
      t: (id, en) => (get().language === 'ID' ? id : en),
    }),
    {
      name: 'cimeds-language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Listen to storage events from other tabs/windows
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === 'cimeds-language-storage' && e.newValue) {
      try {
        const { state } = JSON.parse(e.newValue);
        useLanguageStore.setState({ language: state.language });
      } catch (error) {
        console.error('Failed to parse language from storage:', error);
      }
    }
  });

  // Listen to custom language change event
  window.addEventListener('language-change', ((e: CustomEvent) => {
    const currentLang = useLanguageStore.getState().language;
    if (currentLang !== e.detail) {
      useLanguageStore.setState({ language: e.detail });
    }
  }) as EventListener);
}
