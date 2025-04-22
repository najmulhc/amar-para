import LocaleProvider from './providers/LocaleProvider';
import { Hind_Siliguri } from 'next/font/google';
import './styles/globals.css';

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${hindSiliguri.className} font-sans bg-bg text-primary`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
