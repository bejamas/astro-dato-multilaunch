export default function middleware(request) {
  const url = new URL(request.url)
  const country = request.geo?.country || 'US'
  
  // Map countries to languages
  const countryToLocale = {
    'DE': 'de',
    'FR': 'fr',
    'Nl': 'nl',
    'US': 'en', // Default
    'GB': 'en',
    'AU': "en",
  }
  
  const locale = countryToLocale[country] || 'en'
  
  // If user is on the homepage, redirect to localized version
  if (url.pathname === '/' || url.pathname === '/index.html') {
    return Response.redirect(new URL(`/${locale}${url.pathname}`, request.url))
  }

  // Continue for already localized paths
  return Response.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}