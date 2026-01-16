import { create } from 'zustand';

type Language = 'ID' | 'EN';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (id: string, en: string) => string;
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: 'ID',
  setLanguage: (lang) => set({ language: lang }),
  t: (id, en) => (get().language === 'ID' ? id : en),
}));
