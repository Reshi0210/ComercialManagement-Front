import { TestBed } from '@angular/core/testing';

import { CredentialsAddInterceptor } from './credentials-add.interceptor';

describe('CredentialsAddInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CredentialsAddInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CredentialsAddInterceptor = TestBed.inject(CredentialsAddInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
