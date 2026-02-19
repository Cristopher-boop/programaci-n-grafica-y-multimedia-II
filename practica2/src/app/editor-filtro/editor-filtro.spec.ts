import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFiltro } from './editor-filtro';

describe('EditorFiltro', () => {
  let component: EditorFiltro;
  let fixture: ComponentFixture<EditorFiltro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorFiltro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorFiltro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
