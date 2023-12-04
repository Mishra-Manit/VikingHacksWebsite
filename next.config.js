/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/pay',
        destination: 'https://hcb.hackclub.com/donations/start/viking-hacks',
        permanent: true,
      },

      {
        source: '/python',
        destination: 'https://forms.gle/xfqgW4Naupcxi2GU8',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
};
