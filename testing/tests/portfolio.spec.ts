import { test, expect, Page } from "@playwright/test";
import { Portfolio } from "../pages/portfolio.page";
import datafile from "../../src/assets/datafile.json";

test.describe("Navigation checks", () => {
  let portfolio: Portfolio;
  let navSteps;

  test.beforeEach(async ({ page }) => {
    // Set up the portfolio instance before each test
    portfolio = new Portfolio(page);
    await portfolio.setup();
    navSteps = [
      { navItem: "KF", url: portfolio.defaultUrl + "" },
      { navItem: "About", url: portfolio.defaultUrl + "#about" },
      { navItem: "Projects", url: portfolio.defaultUrl + "#projects" },
      { navItem: "Experience", url: portfolio.defaultUrl + "#experience" },
      { navItem: "Contact", url: portfolio.defaultUrl + "#contact" },
    ];
  });

  // Define navigation steps for the main page

  test("Main page navigation tests", async () => {
    // Test navigation on the main page
    for (const item of navSteps) {
      expect(await portfolio.navigation(item.navItem)).toEqual(item.url);
    }
  });

  test("Project page navigation tests", async () => {
    // Initialize an array to store project steps
    let projectSteps: { id: string; navSteps: any }[] = [];

    // Iterate over each project in the datafile
    datafile.projects.forEach((project) => {
      // Populate project steps with the relevant data
      projectSteps.push({ id: project.id, navSteps: navSteps });
    });

    // Perform navigation tests for each project
    for (const project of projectSteps) {
      // Click on the project using its ID
      await portfolio.projects.locator(`[id="${project.id}"]`).click();
      // Test navigation within the project
      for (const item of project.navSteps) {
        expect(await portfolio.navigation(item.navItem)).toEqual(item.url);
      }
    }
  });

  test("Socials navigation checks", async () => {
    await portfolio.socials.locator("#linkedin").click();
    expect(portfolio.page.url()).toEqual(
      "https://www.linkedin.com/in/kyle-fox1/"
    );
    await portfolio.setup();
    await portfolio.socials.locator("#github").click();
    expect(portfolio.page.url()).toEqual("https://github.com/KyleFox2");
  });
});

test.describe("Basic content checks", () => {
  let portfolio: Portfolio;

  test.beforeEach(async ({ page }) => {
    // Set up the portfolio instance before each test
    portfolio = new Portfolio(page);
    await portfolio.setup();
  });

  test("Introduction text checks", () => {});

  test("Title checks", () => {});

  test("Footer text checks", () => {});
});

test.describe("Form validation tests", () => {
  let portfolio: Portfolio;

  test.beforeEach(async ({ page }) => {
    // Set up the portfolio instance before each test
    portfolio = new Portfolio(page);
    await portfolio.setup();
  });
});
