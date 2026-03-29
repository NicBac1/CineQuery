/**
 * JSON error for API responses. Does not expose err.message for 5xx in production.
 */
export function sendError(res, err, defaultStatus = 500) {
  const status =
    typeof err?.status === 'number' && err.status >= 400 && err.status < 600
      ? err.status
      : defaultStatus;
  const isProd = process.env.NODE_ENV === 'production';
  const message =
    status < 500 || !isProd
      ? err?.message || 'Request failed'
      : 'Internal Server Error';
  return res.status(status).json({ error: message });
}
