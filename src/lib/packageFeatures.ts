import { PackageTier, SectionKey } from './types'

/**
 * Defines which sections are available per package tier.
 * A section must appear here AND in config.enabledSections to be rendered.
 *
 * To add a new tier or section:
 * 1. Add the SectionKey to types.ts
 * 2. Add it to the appropriate tier arrays below
 */
export const PACKAGE_SECTIONS: Record<PackageTier, SectionKey[]> = {
  basic:    ['hero', 'services', 'contact'],
  standard: ['hero', 'services', 'about', 'testimonials', 'faq', 'contact'],
  premium:  ['hero', 'services', 'about', 'testimonials', 'faq', 'contact', 'cta'],
}

/**
 * Returns the sections that should actually render, in the order the client
 * specified, filtered to only what their package tier allows.
 */
export function getVisibleSections(
  enabledSections: SectionKey[],
  tier: PackageTier
): SectionKey[] {
  const allowed = new Set(PACKAGE_SECTIONS[tier])
  return enabledSections.filter((key) => allowed.has(key))
}
