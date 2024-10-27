export default function manifest() {
  return {
    name: 'bibiliamtaani',
    short_name: 'bibiliamtaani',
    description: 'Get the gospel of God from anywhere directly from your phone',
    start_url: '/' || '/page/home',
    display: 'standalone',
    background_color: '#f2f4f7',
    theme_color: '#e88c3fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}