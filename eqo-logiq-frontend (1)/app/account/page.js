import AccountClient from './AccountClient';

export const metadata = {
  title: `My Account | Eqo Logiq`,
  description: `Your Eqo Logiq member area. View orders, manage preferences, and track your impact.`,
};

export default function Page() {
  return <AccountClient />;
}
