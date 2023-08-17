import { frontendSearch } from '../frontendSearch';

describe('frontendSearch', () => {
  it('should return "ok!"', () => {
    expect(frontendSearch()).toEqual('ok!');
  });
});
