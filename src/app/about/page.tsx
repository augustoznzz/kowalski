"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/components/LanguageToggle";

export default function AboutPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-[var(--foreground)] font-sans">
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            {t('aboutSubtitle')}
          </p>
        </header>

        <div className="space-y-16">
          {/* Nossa História */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>{t('ourStory')}</h2>
              <div className="space-y-4 text-neutral-200 leading-relaxed">
                <p>
                  {t('storyText1')}
                </p>
                <p>
                  {t('storyText2')}
                </p>
                <p>
                  {t('storyText3')}
                </p>
              </div>
            </div>
            <div className="bg-[var(--accent)]/10 rounded-2xl p-8 border border-green-900">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">{t('constantInnovation')}</h3>
                <p className="text-neutral-200">
                  {t('innovationDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Missão & Valores */}
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--accent)' }}>
              {t('missionValues')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">{t('quality')}</h3>
                <p className="text-neutral-200">{t('qualityDesc')}</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">{t('simplicity')}</h3>
                <p className="text-neutral-200">{t('simplicityDesc')}</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">{t('transparency')}</h3>
                <p className="text-neutral-200">{t('transparencyDesc')}</p>
              </div>
              <div className="bg-black/70 border border-green-900 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">{t('sustainability')}</h3>
                <p className="text-neutral-200">{t('sustainabilityDesc')}</p>
              </div>
            </div>
          </section>

          {/* Compromisso com a Qualidade */}
          <section className="bg-gradient-to-r from-[var(--accent)]/10 to-green-800/10 border border-green-700 rounded-2xl p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
                {t('qualityCommitment')}
              </h2>
              <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                {t('qualityCommitmentDesc')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">100%</div>
                  <p className="text-neutral-200">{t('satisfactionGuaranteed')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">24h</div>
                  <p className="text-neutral-200">{t('technicalSupport')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[var(--accent)] mb-2">5★</div>
                  <p className="text-neutral-200">{t('averageRating')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
              {t('readyToKnow')}
            </h2>
            <p className="text-lg text-neutral-200 mb-8 max-w-2xl mx-auto">
              {t('qualityDesignDesc')}
            </p>
            <Link href="/shop" className="btn-primary text-lg px-8 py-4">
              {t('exploreCatalog')}
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
