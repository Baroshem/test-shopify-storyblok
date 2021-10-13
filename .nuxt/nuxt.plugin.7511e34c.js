import { integrationPlugin } from '@vue-storefront/core'

export default integrationPlugin(({ integration }) => {
  integration.configure('sb', { ...{"jsBridge":"https:\u002F\u002Fapp.storyblok.com\u002Ff\u002Fstoryblok-latest.js?t=cc"} })
})
