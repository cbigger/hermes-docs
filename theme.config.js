export default {
  logo: <span>Hermes Economic System Docs</span>,
  project: {
    link: 'https://github.com/yourusername/docs-site',
  },
  docsRepositoryBase: 'https://github.com/yourusername/docs-site/tree/main',
  footer: {
    text: 'Hermes Economic System Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Hermes Docs'
    }
  },
}
