import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesCliComponent } from './componentes-cli.component';

describe('ComponentesCliComponent', () => {
  let component: ComponentesCliComponent;
  let fixture: ComponentFixture<ComponentesCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
