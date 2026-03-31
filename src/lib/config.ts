import { ClientConfig } from './types'

/**
 * Loads the client config for the slug set in NEXT_PUBLIC_CLIENT_SLUG.
 *
 * Each client lives at /clients/[slug]/config.ts and exports a default
 * ClientConfig object. This function is intended to be called once in the
 * app layout or page — not inside components.
 *
 * Throws clearly if the slug is missing or the config file cannot be found,
 * so misconfigured deployments fail at startup rather than silently.
 */
export async function loadClientConfig(): Promise<ClientConfig> {
  const slug = process.env.NEXT_PUBLIC_CLIENT_SLUG

  if (!slug) {
    throw new Error(
      '[config] NEXT_PUBLIC_CLIENT_SLUG is not set. ' +
        'Add it to your .env.local file (e.g. NEXT_PUBLIC_CLIENT_SLUG=example-client).'
    )
  }

  let config: ClientConfig

  try {
    const module = await import(`../../clients/${slug}/config`)
    config = module.default
  } catch {
    throw new Error(
      `[config] Could not load config for client "${slug}". ` +
        `Make sure the file exists at clients/${slug}/config.ts and exports a default ClientConfig.`
    )
  }

  validateConfig(config, slug)

  return config
}

function validateConfig(config: ClientConfig, slug: string): void {
  const required: Array<keyof ClientConfig> = [
    'slug',
    'businessName',
    'packageTier',
    'brand',
    'hero',
    'services',
    'enabledSections',
    'integrations',
  ]

  for (const key of required) {
    if (config[key] === undefined || config[key] === null) {
      throw new Error(
        `[config] Client "${slug}" is missing required field: "${key}".`
      )
    }
  }

  if (config.slug !== slug) {
    throw new Error(
      `[config] Client config slug "${config.slug}" does not match ` +
        `NEXT_PUBLIC_CLIENT_SLUG "${slug}". They must be identical.`
    )
  }

  if (config.services.length === 0) {
    throw new Error(
      `[config] Client "${slug}" must define at least one service.`
    )
  }

  if (config.enabledSections.length === 0) {
    throw new Error(
      `[config] Client "${slug}" must enable at least one section.`
    )
  }
}
