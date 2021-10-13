module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: process.env.SHOPIFY_DOMAIN,
          storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN
        },
        currency: 'USD',
        country: 'US'
      }
    },
    sb: {
      location: '@vue-storefront/storyblok/server',
      configuration: {
        token: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory',
      },
    }
  }
};
