export default (ctx, inject) => {
    const debug = <%=JSON.stringify(options.debug || false) %>
    inject('storyblokNujek', { debug })
}