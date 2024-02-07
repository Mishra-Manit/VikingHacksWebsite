/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/donate',
        destination: 'https://hcb.hackclub.com/donations/start/viking-hacks',
        permanent: true,
      },

      {
        source: '/python',
        destination: 'https://forms.gle/xfqgW4Naupcxi2GU8',
        permanent: true,
      },

      {
        source: '/feedback',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSdze1dziuFhXdycvcEn8kmp3qYV3FNp6sOUiNQtesRyeKVAYQ/viewform?usp=sf_link',
        permanent: true,
      },

      {
        source: '/greenlight',
        destination: 'https://share.greenlight.com/25619981',
        permanent: true,
      },

      {
        source: '/photos',
        destination: 'https://photos.app.goo.gl/xbdtsegKgpsz1Ytd9',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
};
