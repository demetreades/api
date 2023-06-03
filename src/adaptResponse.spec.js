/* eslint-disable no-undef */
import { adaptResponse } from './adaptResponse.js';
import { expect } from 'chai';
import sinon from 'sinon';

describe('adaptResponse', () => {
  it('should return a frozen object with the useful properties from the response object', () => {
    const res = {
      status: 201,
      sendStatus: 200,
      cookies: { token: 'abc123' },
      redirect: '/login',
      locals: { reqId: '21312452' },
      append: {},
      attachment: {},
    };

    const adaptedResponse = adaptResponse(res);

    expect(Object.isFrozen(adaptedResponse)).to.be.true;
    expect(adaptedResponse.status).to.equal(201);
    expect(adaptedResponse.sendStatus).to.equal(200);
    expect(adaptedResponse.cookies).to.deep.equal({ token: 'abc123' });
    expect(adaptedResponse.redirect).to.equal('/login');
    expect(adaptedResponse.locals).to.deep.equal({ reqId: '21312452' });
    expect(adaptedResponse.append).to.deep.equal({});
    expect(adaptedResponse.attachment).to.deep.equal({});
  });
});
