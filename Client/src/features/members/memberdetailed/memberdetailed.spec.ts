import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Memberdetailed } from './memberdetailed';

describe('Memberdetailed', () => {
  let component: Memberdetailed;
  let fixture: ComponentFixture<Memberdetailed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberdetailed],
    }).compileComponents();

    fixture = TestBed.createComponent(Memberdetailed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
