export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname.match(/\.(woff2?|ttf|otf|eot)$/)) {
      const response = await fetch(request);
      const newHeaders = new Headers(response.headers);

      newHeaders.set("Access-Control-Allow-Origin", "https://dev.bviral.co.il");
      newHeaders.set("Access-Control-Allow-Methods", "GET, OPTIONS");
      newHeaders.set("Access-Control-Allow-Headers", "*");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    return fetch(request);
  },
};
