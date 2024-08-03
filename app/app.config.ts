export default defineAppConfig({
  appName: 'Kemboi Elvis Portfolio',
  appDescription: 'Nuxt and Tailwind CSS. Highly inspired by  HugoRCD',
  profilePicture: '/assets/profile-picture.png',
  footerName: 'Kemboi Elvis',
  email: 'kemboielvis@genius.ke || kemboielvis22@gmail.com',
  twitterUsername: '@kemboielvis22',
  phone: '(+254) 718240819',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/kemboi22',
    twitter: 'https://twitter.com/kemboielvis22',
    linkedin: 'https://www.linkedin.com/in/kemboi-elvis-ab7a431b2',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
