const adaptResponse = (res) => {
  return Object.freeze({
    status: res.status,
    sendStatus: res.sendStatus,
    cookies: res.cookies,
    redirect: res.redirect,
    locals: res.locals,
    append: res.append,
    attachment: res.attachment,
  });
};

export { adaptResponse };
