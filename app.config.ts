// const socialTitle = "🦨 Juniper the Skunktaur's Site 🦨";
const socialDescription = 'Official site for your favourite four-armed skunktaur';

const titleTemplateFunction = function (titleChunk: string): string {
  // If undefined or blank then we don't need the hyphen
  return titleChunk ? `🦨 ${titleChunk} - Juniper's Site 🦨` : "🦨 Juniper the Skunktaur's Site 🦨";
};
export default defineAppConfig({
  alpine: {
    titleTemplate: titleTemplateFunction,
    title: '🦨 Juniper Skunktaur\'s Site 🦨',
    description: 'Official site for your favourite four-armed skunktaur',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'skunktaur',
      telegram: {
        icon: 'mdi:telegram',
        label: 'telegram',
        href: 'https://t.me/skunktaur'
      },
      mastodon: {
        icon: 'mdi:mastodon',
        label: 'Fediverse',
        href: 'https://social.furry.nz/@Juniper'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
