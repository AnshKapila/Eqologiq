import NotFoundContent from './NotFoundContent';

export const metadata = {
  title: 'Page Not Found | Eqo Logiq',
  description: "The page you were looking for doesn't exist. Browse Eqo Logiq's plastic-free steel bottles and daily essentials.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
