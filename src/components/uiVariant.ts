export type UiVariant = 'v1' | 'v2' | 'v3'

export function getVariantFromPath(pathname: string): UiVariant {
    if (pathname.startsWith('/v2') || pathname.includes('/v2')) return 'v2'
    return 'v3'
}
