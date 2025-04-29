import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowLoaderComponent } from './slow-loader.component';

describe('SlowLoaderComponent', () => {
  let component: SlowLoaderComponent;
  let fixture: ComponentFixture<SlowLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlowLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlowLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
