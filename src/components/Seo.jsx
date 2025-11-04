import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({
  title,
  description,
  url,
  image,
  keywords,
}) => {
  const siteTitle = title || 'Jemaile Mohamed — Full‑stack Developer';
  const siteDescription = description || 'Full‑stack web developer from Cape Town building responsive, accessible and performant web apps using React, Node.js and modern web tooling.';
  const siteUrl = url || 'https://jemaile-portfolio.netlify.app';
  const siteImage = image || `${siteUrl}/og-image.png`;
  const siteKeywords = keywords || 'full-stack, web developer, react, node, javascript, jemaile mohamed';

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      <meta name="theme-color" content="#0ea5a4" />
      {/* JSON-LD structured data for better indexing */}
      <script type="application/ld+json">{
        `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jemaile Mohamed",
          "url": "${siteUrl}",
          "sameAs": [
            "https://github.com/GeorgeZa01",
            "https://www.linkedin.com/in/jemaile-mohamed"
          ],
          "jobTitle": "Full‑stack Web Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "Jemaile Mohamed"
          }
        }`
      }</script>
    </Helmet>
  );
};

export default Seo;
