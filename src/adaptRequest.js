const adaptRequest = (req) => {
  return Object.freeze({
    path: req.path,
    method: req.method,
    params: req.params,
    query: req.query,
    headers: req.headers,
    body: req.body,
    xhr: req.xhr,
    cookies: req.cookies,
    protocol: req.protocol,
    userAgent: req.get('User-Agent'),
    session: req.session,
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    host: req.get('host'),
    hostname: req.get('hostname'),
    socket: req.socket,
    subdomains: req.subdomains,
    route: req.route,
    fresh: req.fresh,
    stale: req.stale,
    secure: req.secure,
  });
};

export { adaptRequest };
