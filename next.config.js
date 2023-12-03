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
    ]
  },
  images: {
    domains: ["upcdn.io", "replicate.delivery"],
  },
};
