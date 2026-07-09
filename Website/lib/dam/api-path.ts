/** Client-safe DAM image API path — no Node.js imports */
export function damImageApiPath(assetId: string): string {
  return `/api/dam/image/${encodeURIComponent(assetId)}`;
}
