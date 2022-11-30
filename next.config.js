/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['ptbr', 'en'],
    defaultLocale: 'ptbr',
    localeDetection: false
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    })

    return config
  }
}

module.exports = nextConfig
