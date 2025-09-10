import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();
  return <>{children}</>;
}
