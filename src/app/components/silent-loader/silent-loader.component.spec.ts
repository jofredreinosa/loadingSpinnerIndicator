import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentLoaderComponent } from './silent-loader.component';

describe('SilentLoaderComponent', () => {
  let component: SilentLoaderComponent;
  let fixture: ComponentFixture<SilentLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilentLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
