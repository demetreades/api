/* eslint-disable no-undef */
import { adaptRequest } from './adaptRequest.js';
import { expect } from 'chai';
import sinon from 'sinon';

const reqArgs = {
  'User-Agent': 'Mozilla/5.0',
  host: 'localhost:3000',
  hostname: 'localhost',
};

// stubGetFunction = (key) => {
//   return sinon.stub().withArgs(key).returns(reqArgs[key]);
// };

describe('adaptRequest', () => {
  it('should return a frozen object with the useful properties from the request object', () => {
    const req = {
      path: '/example',
      method: 'GET',
      params: { id: '123' },
      query: { page: 1 },
      headers: { 'Content-Type': 'application/json' },
      body: { name: 'John' },
      xhr: true,
      get: sinon.stub(),
      cookies: { token: 'abc123' },
      protocol: 'http',
      session: { userId: 'xyz789' },
      url: '/example?page=1',
      baseUrl: '/',
      originalUrl: '/example?page=1',
      host: 'localhost:3000',
      hostname: 'localhost',
      socket: {},
      subdomains: ['sub'],
      route: {},
      fresh: false,
      stale: true,
      secure: false,
    };

    Object.keys(reqArgs).forEach((key) => {
      req.get.withArgs(key).returns(reqArgs[key]);
    });

    const adaptedRequest = adaptRequest(req);

    expect(Object.isFrozen(adaptedRequest)).to.be.true;
    expect(adaptedRequest.path).to.equal('/example');
    expect(adaptedRequest.method).to.equal('GET');
    expect(adaptedRequest.params).to.deep.equal({ id: '123' });
    expect(adaptedRequest.query).to.deep.equal({ page: 1 });
    expect(adaptedRequest.headers).to.deep.equal({ 'Content-Type': 'application/json' });
    expect(adaptedRequest.body).to.deep.equal({ name: 'John' });
    expect(adaptedRequest.xhr).to.be.true;
    expect(adaptedRequest.cookies).to.deep.equal({ token: 'abc123' });
    expect(adaptedRequest.protocol).to.equal('http');
    expect(adaptedRequest.userAgent).to.equal('Mozilla/5.0');
    expect(adaptedRequest.session).to.deep.equal({ userId: 'xyz789' });
    expect(adaptedRequest.url).to.equal('/example?page=1');
    expect(adaptedRequest.baseUrl).to.equal('/');
    expect(adaptedRequest.originalUrl).to.equal('/example?page=1');
    expect(adaptedRequest.host).to.equal('localhost:3000');
    expect(adaptedRequest.hostname).to.equal('localhost');
    expect(adaptedRequest.socket).to.deep.equal({});
    expect(adaptedRequest.subdomains).to.deep.equal(['sub']);
    expect(adaptedRequest.route).to.deep.equal({});
    expect(adaptedRequest.fresh).to.be.false;
    expect(adaptedRequest.stale).to.be.true;
    expect(adaptedRequest.secure).to.be.false;
  });
});
