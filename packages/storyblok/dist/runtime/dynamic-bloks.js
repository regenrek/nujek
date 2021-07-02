export default (ctx, inject) => {

  const prefixes = <%=JSON.stringify(options.prefixes || []) %>

  const debug = <%=JSON.stringify(options.debug || false) %>

  inject('nuxtDynamic', { debug, prefixes })
}
