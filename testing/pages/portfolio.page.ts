import { expect, Page, Locator } from "@playwright/test";

export class Portfolio {
  readonly page: Page;
  readonly defaultUrl: string;
  readonly nav: Locator;
  readonly projects: Locator;
  readonly socials: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultUrl = "http://localhost:3000/";
    this.nav = this.page.locator(".navBtn");
    this.projects = this.page.locator(".project");
    this.socials = this.page.locator(".socials");
  }

  async setup() {
    await this.page.goto("http://localhost:3000/");
    await this.page.waitForLoadState("networkidle");
  }

  async navigation(navItem) {
    await this.nav.getByText(navItem).click();
    return this.page.url();
  }
}
