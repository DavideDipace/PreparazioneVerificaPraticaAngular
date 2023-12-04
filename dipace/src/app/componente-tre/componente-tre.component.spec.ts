import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTreComponent } from './componente-tre.component';

describe('ComponenteTreComponent', () => {
  let component: ComponenteTreComponent;
  let fixture: ComponentFixture<ComponenteTreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
