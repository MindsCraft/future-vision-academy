import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.shortName} — ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Future Vision Academy Logo"
          width={280}
          height={280}
          style={{
            maxWidth: '90vw',
            maxHeight: '80vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          priority
        />
      </div>
    </main>
  );
}
