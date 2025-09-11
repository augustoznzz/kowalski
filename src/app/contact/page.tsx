"use client";
import React, { useState } from "react";
import { useTranslation } from "@/components/LanguageToggle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black text-[var(--foreground)] font-sans">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
              {t('sendMessage')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/70 border border-green-900 rounded-xl p-8">
              {submitStatus === 'success' && (
                <div className="bg-green-900/30 border border-green-700 text-green-300 px-4 py-3 rounded-lg mb-4">
                  {t('messageSentSuccess')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-4">
                  {t('messageSentError')}
                </div>
              )}
              
              <div>
                <label className="block font-semibold mb-2 text-white">{t('fullName')}</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  placeholder={t('fullNamePlaceholder')}
                  required 
                />
              </div>
              
              <div>
                <label className="block font-semibold mb-2 text-white">{t('email')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  placeholder={t('emailPlaceholder')}
                  required 
                />
              </div>

              <div>
                <label className="block font-semibold mb-2 text-white">{t('subject')}</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors"
                  required
                >
                  <option value="">{t('selectSubject')}</option>
                  <option value={t('productQuestion')}>{t('productQuestion')}</option>
                  <option value={t('orderProblem')}>{t('orderProblem')}</option>
                  <option value={t('suggestion')}>{t('suggestion')}</option>
                  <option value={t('complaint')}>{t('complaint')}</option>
                  <option value={t('compliment')}>{t('compliment')}</option>
                  <option value={t('other')}>{t('other')}</option>
                </select>
              </div>
              
              <div>
                <label className="block font-semibold mb-2 text-white">{t('message')}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-green-900 bg-black text-white rounded-lg px-4 py-3 focus:border-[var(--accent)] focus:outline-none transition-colors" 
                  rows={6}
                  placeholder={t('messagePlaceholder')}
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('sendingMessage') : t('sendMessageBtn')}
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
                {t('otherContact')}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">📧 {t('email')}</h3>
                  <p className="text-neutral-200 mb-2 mt-4">{t('technicalSupportEmail')}</p>
                  <a href="mailto:suporte@kowalski.com" className="text-[var(--accent)] hover:underline font-medium">
                    suporte@kowalski.com
                  </a>
                </div>

                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">⏰ {t('businessHours')}</h3>
                  <div className="text-neutral-200 space-y-1">
                    <p>{t('mondayFriday')}</p>
                    <p>{t('saturday')}</p>
                    <p>{t('sunday')}</p>
                  </div>
                </div>

                <div className="bg-black/70 border border-green-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-[var(--accent)]">⚡ {t('responseTime')}</h3>
                  <div className="text-neutral-200 space-y-1">
                    <p>{t('emailResponse')}</p>
                    <p>{t('formResponse')}</p>
                    <p>{t('urgentResponse')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ rápido */}
            <div className="bg-gradient-to-r from-[var(--accent)]/10 to-green-800/10 border border-green-700 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">{t('faq')}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-white">{t('trackOrder')}</p>
                  <p className="text-neutral-300">{t('trackOrderAnswer')}</p>
                </div>
                <div>
                  <p className="font-medium text-white">{t('deliveryTime')}</p>
                  <p className="text-neutral-300">{t('deliveryTimeAnswer')}</p>
                </div>
                <div>
                  <p className="font-medium text-white">{t('canExchange')}</p>
                  <p className="text-neutral-300">{t('canExchangeAnswer')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
