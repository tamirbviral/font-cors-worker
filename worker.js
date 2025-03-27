export default {
  async fetch(request) {
    const url = new URL(request.url)

    // שים לב – מחליף את fonts.bviral.co.il ל-www.bviral.co.il
    url.hostname = "www.bviral.co.il"

    // שולח את הבקשה ל-www
    const response = await fetch(url.toString(), request)

    // מחזיר את התגובה, עם CORS פתוח
    const newHeaders = new Headers(response.headers)
    newHeaders.set("Access-Control-Allow-Origin", "*")

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    })
  }
}
