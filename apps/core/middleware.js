export default function middleware(request) {
  // Get the country code from Vercel's headers
  const country = request.headers.get("x-vercel-ip-country") || "US"

    const countryToLanguage = {
    US: "en",
    GB: "en",
    AU: "en",
    FR: "fr",
    DE: "de",
    NL: "nl",
  }

  const language = countryToLanguage[country] || "en"
  const url = new URL(request.url)
  const pathname = url.pathname

  // Check if the URL already has a language prefix
  const hasLanguagePrefix = /^\/(en|nl|fr|de)\/?/.test(pathname)

  // If there's no language prefix and it's not a static asset or API route
  if (
    !hasLanguagePrefix &&
    !pathname.startsWith("/_astro/") &&
    !pathname.startsWith("/api/") &&
    !pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)
  ) {
    // Redirect to the localized version
    return Response.redirect(new URL(`/${language}${pathname}`, request.url))
  }

  return Response.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_astro|api|.*\\.).*)",
  ],
}

