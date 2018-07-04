import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, NavController } from 'ionic-angular/index';

describe('Home Page', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
  });

  it('should create component', () => {
    comp = fixture.componentInstance;
    expect(comp).toBeDefined()
  });

  it('should have contain Ionic string', () => {
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.innerText).toMatch(/ionic/i,
      '<h3> should have something about "Ionic"');
  });

  it('should show the favicon as <img>', () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('assets/icon/favicon.ico');
  });
});
