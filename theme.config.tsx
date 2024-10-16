import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>OpenLCH</span>,
  project: {
    link: 'https://github.com/Zeroth-Robotics/OpenLCH',
  },
  chat: {
    link: 'https://discord.com/invite/kscale',
  },
  docsRepositoryBase: 'https://github.com/jingxiangmo/openlch-docs/tree/main',
  footer: {
    text: 'OpenLCH, a K-Scale Labs project.',
  },
}

export default config
