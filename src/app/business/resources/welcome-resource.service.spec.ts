import { TestBed } from '@angular/core/testing';

import { WelcomeResourceService } from './welcome-resource.service';

describe('WelcomeResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeResourceService = TestBed.get(WelcomeResourceService);
    expect(service).toBeTruthy();
  });
});
