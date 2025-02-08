import queryCMS from './cms';

export default async function getAvailableLocales() {
  const query = `
    query {
      _site {
        locales
      }    
    }
  `;
  
  const { _site } = await queryCMS(query);
  return _site.locales;
}

export async function getFallbackLocale() {
  const locales = await getAvailableLocales();
  return locales[0]; // Using the first ordered locale as fallback
}
