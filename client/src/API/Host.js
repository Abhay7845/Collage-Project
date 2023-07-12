export const HOST_URL = "";
export const Headers = {
  headers: {
    "Content-Type": "application/json, text/plain, */*",
    "Content-Security-Policy":
      "'default-src' 'self' ; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "sameorigin",
    "Strict-Transport-Security": "max-age=31536000",
    "Permissions-Policy": "geolocation=(), microphone=()",
    "Referrer-Policy": "strict-origin",
  },
};
