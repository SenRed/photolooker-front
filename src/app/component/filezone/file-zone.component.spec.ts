import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FileZoneComponent} from "./file-zone.component";


describe('FilezoneComponent', () => {
  let component: FileZoneComponent;
  let fixture: ComponentFixture<FileZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileZoneComponent]
    });
    fixture = TestBed.createComponent(FileZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
