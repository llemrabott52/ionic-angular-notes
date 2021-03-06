import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { waitForAsync, ComponentFixture, TestBed } from "@angular/core/testing";

import { RecipesPage } from "./recipes.page";

describe("RecipesPage", () => {
	let component: RecipesPage;
	let fixture: ComponentFixture<RecipesPage>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RecipesPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RecipesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
