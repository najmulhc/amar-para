'use client';

import i18n from '@/i18';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return <I18nextProvider i18n={i18n}>{children} </I18nextProvider>;
}
