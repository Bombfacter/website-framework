import { loadClientConfig } from '@/lib/config'

/*
  PageShell — server component.

  Responsible for two things only:
  1. Loading the client config and applying brand tokens as CSS custom
     properties so all descendant components can use var(--color-primary) etc.
  2. Wrapping children in the branded root div.

  Config data is NOT passed through here — pages load config directly.
*/
export default async function PageShell({ children }: { children: React.ReactNode }) {
  const config = await loadClientConfig()
  const { brand } = config

  const brandVars = {
    '--color-primary': brand.primaryColor,
    '--color-accent': brand.accentColor,
    ...(brand.fontFamily ? { '--font-family': brand.fontFamily } : {}),
  } as React.CSSProperties

  return (
    <div style={brandVars}>
      {children}
    </div>
  )
}
