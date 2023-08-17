import { frontendEngagement } from '../frontendEngagement';

describe('frontendEngagement', () => {
  it('should return "ok!"', () => {
    expect(frontendEngagement()).toEqual('ok!');
  });
});
