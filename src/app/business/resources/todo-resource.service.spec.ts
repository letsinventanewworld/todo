import { TestBed } from '@angular/core/testing';

import { TodoResourceService } from './todo-resource.service';

describe('TodoResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoResourceService = TestBed.get(TodoResourceService);
    expect(service).toBeTruthy();
  });
});
