import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Memberlist } from './memberlist';

describe('Memberlist', () => {
  let component: Memberlist;
  let fixture: ComponentFixture<Memberlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Memberlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Memberlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
