import React, { useEffect } from 'react';

export function SEOHead({ title, description, canonicalUrl, designer, project }) {
  useEffect(() => {
    // Update Title
    if (title) document.title = title;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || designer.positioning;

    // Inject JSON-LD Structured Data for Person & ProfessionalService
    const scriptId = 'json-ld-designer-schema';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": ["Person", "ProfessionalService"],
      "name": designer.name,
      "jobTitle": designer.role,
      "description": designer.positioning,
      "url": designer.socials.website,
      "email": designer.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": designer.location
      },
      "knowsAbout": ["Brand Identity", "Packaging Design", "Art Direction", "Design Systems"],
      "sameAs": [
        designer.socials.linkedin,
        designer.socials.github,
        designer.socials.medium
      ]
    };

    script.text = JSON.stringify(schemaData);

    return () => {
      // Clean up script on unmount if needed
    };
  }, [title, description, canonicalUrl, designer, project]);

  return null;
}
