/**
 * Structured Data (JSON-LD) utilities for SEO
 */

export interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint?: ContactPoint[];
  sameAs?: string[];
}

export interface ContactPoint {
  '@type': string;
  telephone?: string;
  email?: string;
  contactType: string;
  availableLanguage: string[];
}

export interface WebSite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema(locale: string): Organization {
  const isSpanish = locale === 'es';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UNIDXS WNC',
    alternateName: isSpanish 
      ? 'UNIDXS Western North Carolina - Organización Comunitaria'
      : 'UNIDXS Western North Carolina - Community Organization',
    url: 'https://unidxswnc.org',
    logo: 'https://unidxswnc.org/Logo.png',
    description: isSpanish
      ? 'UNIDXS WNC - Construyendo una sociedad más justa, solidaria e inclusiva en Western North Carolina'
      : 'UNIDXS WNC - Building a more just, supportive and inclusive society in Western North Carolina',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sylva',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-828-242-7345',
        email: 'Info@unidxswnc.org',
        contactType: 'General Inquiries',
        availableLanguage: ['English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        email: 'PaulWitty@unidxswnc.org',
        contactType: 'Health Services',
        availableLanguage: ['English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        email: 'SarahWest@unidxswnc.org',
        contactType: 'Education Services',
        availableLanguage: ['English', 'Spanish'],
      },
      {
        '@type': 'ContactPoint',
        email: 'Nlipan@unidxswnc.org',
        contactType: 'Regional Education Programs',
        availableLanguage: ['English', 'Spanish'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/unidxswnc',
      'https://www.instagram.com/unidxswnc',
    ],
  };
}

/**
 * Generate WebSite structured data with search action
 */
export function generateWebSiteSchema(locale: string): WebSite {
  const isSpanish = locale === 'es';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UNIDXS WNC',
    url: `https://unidxswnc.org/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://unidxswnc.org/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate NonProfit organization structured data
 */
export function generateNonProfitSchema(locale: string) {
  const isSpanish = locale === 'es';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'UNIDXS WNC',
    url: 'https://unidxswnc.org',
    logo: 'https://unidxswnc.org/Logo.png',
    description: isSpanish
      ? 'Organización local, intercultural, no política comprometida a servir a la comunidad en los siete condados rurales del oeste de Carolina del Norte, especialmente dentro de la comunidad hispana.'
      : 'Local, intercultural, non-political organization committed to serving our community in the seven rural counties of Western NC, especially within the Hispanic Community.',
    mission: isSpanish
      ? 'Ayudar a personas, especialmente aquellas que se encuentran en situaciones sociales, económicas, educativas o culturales vulnerables, para garantizar la inclusión en la comunidad y lograr una sociedad más justa y solidaria.'
      : 'To help people, especially those who find themselves in vulnerable social, economic, educational, or cultural situations, to ensure inclusion in the community and achieve a fairer, more supportive society.',
    areaServed: {
      '@type': 'State',
      name: 'North Carolina',
    },
  };
}
