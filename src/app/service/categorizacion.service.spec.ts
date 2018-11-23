import { TestBed } from '@angular/core/testing';

import { CategorizacionService } from './categorizacion.service';

describe('CategorizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorizacionService = TestBed.get(CategorizacionService);
    expect(service).toBeTruthy();
  });
});
