'use client';

import dynamic from 'next/dynamic';

const WelcomePopup = dynamic(
  () => import('./welcomePopup'),
  { ssr: false }
);

export default function ClientWelcomePopup() {
  return <WelcomePopup />;
}
