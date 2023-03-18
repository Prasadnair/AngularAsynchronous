import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduralComponent } from './procedural.component';

describe('ProceduralComponent', () => {
  let component: ProceduralComponent;
  let fixture: ComponentFixture<ProceduralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
