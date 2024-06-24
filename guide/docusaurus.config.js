module.exports = {
  title: 'Nexus UI',
  tagline: "Easily enhance your application's interface with Nexus UI components",
  url: 'https://qkrdkwl9090.github.io', // GitHub Pages URL
  baseUrl: '/', // 리포지토리 이름
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'qkrdkwl9090', // GitHub 사용자 이름
  projectName: 'nexus-ui', // 리포지토리 이름
  themeConfig: {
    navbar: {
      title: 'Nexus UI',
      logo: {
        alt: 'Nexus UI Logo',
        src: 'img/favicon.png'
      },
      items: [
        {
          type: 'dropdown',
          label: 'Components',
          position: 'left',
          items: [
            {
              type: 'doc',
              label: 'Button',
              docId: 'components/button/button'
            },
            {
              type: 'doc',
              label: 'Input Text',
              docId: 'components/form/inputText'
            },
            {
              type: 'doc',
              label: 'Checkbox',
              docId: 'components/form/checkbox'
            },
            {
              type: 'doc',
              label: 'Skeleton',
              docId: 'components/misc/skeleton'
            }
          ]
        },
        {
          href: 'https://github.com/qkrdkwl9090/nexus-ui',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/qkrdkwl9090/nexus-ui'
            }
          ]
        }
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/qkrdkwl9090/nexus-ui/edit/main/guide/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
