import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Status | Frenix AI Orchestrator',
  description: 'Real-time infrastructure telemetry, model availability, and incident reports for the Frenix AI Gateway.',
  openGraph: {
    title: 'Frenix System Status',
    description: 'Monitor the health and performance of the Frenix AI infrastructure.',
    url: 'https://status.frenix.sh',
  },
};

export default function StatusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
