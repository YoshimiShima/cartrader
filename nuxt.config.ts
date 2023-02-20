// https://nuxt.com/docs/api/configuration/nuxt-config
// // import { NuxtConfig } from '@nuxt/types'
// //   const config: NuxtConfig = {
// //     modules: ['@nuxtjs/apollo'],
// //     plugins: ['@/plugins/apollo'],
// //     apollo: {
// //       clientConfigs: {
// //         default: {
// //           httpEndpoint: 'https://yoshimi-exam.hasura.app/v1/graphql',
// //         }
// //       }
// //     }
// //   }

// export default config
// import { defineNuxtConfig } from '@nuxt/kit'
export default ({
    // modules: ['@nuxtjs/apollo'],
    // plugins: ['@/plugins/apollo'],t
    apollo: {
      includeNodeModules: true,
      clientConfigs: {
        default: {
          httpEndpoint: 'https://yoshimi-exam.hasura.app/v1/graphql',
          httpLinkOptions: {
            headers: {
              'X-Hasura-Admin-Secret': 'EvL8VXyXwIEuTfVLlCWXh6azK3YvwHUbjipYlXo8ckIRZSfxa6cHmjiXnSX73svx',
            },
          },
        }
      }
    }
  })