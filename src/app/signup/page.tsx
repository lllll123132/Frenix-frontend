import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: 'var(--bg)'
    }}>
      <SignUp 
        routing="hash" 
        signInUrl="/signin" 
        forceRedirectUrl="/dashboard"
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: '#0a0a0a',
            colorInputBackground: '#111111',
            colorText: '#ffffff',
            colorTextSecondary: '#a1a1aa',
            colorPrimary: '#ffffff',
            colorInputText: '#ffffff',
            colorDanger: '#ef4444',
            borderRadius: '0.75rem',
          },
          elements: {
            rootBox: "mx-auto w-full max-w-[400px]",
            card: "shadow-2xl border border-white/10 rounded-2xl w-full",
            headerTitle: "text-2xl font-black tracking-tight",
            formButtonPrimary: "text-black font-bold hover:opacity-90",
            socialButtonsBlockButton: "border-white/10 hover:bg-white/5",
            formFieldInput: "border-white/10 focus:border-white/20 transition-all",
            footer: "bg-transparent border-t border-white/5",
            footerActionText: "text-gray-400 font-medium",
            footerActionLink: "text-white font-bold hover:text-gray-200"
          }
        }}
      />
    </div>
  );
}
