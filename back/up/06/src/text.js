export function getText () {
  return import(/* webpackChunkName: "moment", webpackPrefetch: true */ 'moment').then(({ default: moment }) => {
    return moment().format('yyyy')
  })
}
