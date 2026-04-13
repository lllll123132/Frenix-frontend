import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '70dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '440px' }}>
        <div style={{
          fontSize: '96px',
          fontWeight: '900',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'var(--border)',
          marginBottom: '24px',
          fontVariantNumeric: 'tabular-nums',
        }}>
          404
        </div>
        <h1 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: 'var(--text-main)',
          marginBottom: '10px',
          letterSpacing: '-0.02em',
        }}>
          Page not found
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '14px',
          lineHeight: '1.6',
          marginBottom: '32px',
        }}>
          Oh! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px' }}>
            Back to home
          </Link>
          <Link href="/docs" className="btn-ghost" style={{ padding: '10px 24px', fontSize: '14px' }}>
            View docs
          </Link>
        </div>
      </div>
    </div>
  );
}
