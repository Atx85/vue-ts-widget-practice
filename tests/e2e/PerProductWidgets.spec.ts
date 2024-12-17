import { colors, Hex } from "@/stories/00-base/01-colors/colorOptions";
import { test, expect } from "@playwright/test";

function hexToRgb(hex: Hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

test("Widget colours on loading: Widget (1) - green", async ({ page }) => {
  await page.goto("http://localhost:8081/");
  await page.waitForTimeout(3000);
  const rgb: { r: number; g: number; b: number } | null = hexToRgb(
    colors["green"]
  );
  if (rgb)
    expect(page.locator(".product-widget-header").first()).toHaveCSS(
      "background-color",
      "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"
    );
});

test("Widget colours on loading: Widget (2) - black", async ({ page }) => {
  await page.goto("http://localhost:8081/");
  await page.waitForTimeout(3000);
  const rgb: { r: number; g: number; b: number } | null = hexToRgb(
    colors["black"]
  );
  if (rgb)
    expect(page.locator(".product-widget-header").nth(1)).toHaveCSS(
      "background-color",
      "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"
    );
});

test("Widget colours on loading: Widget (1) - beige", async ({ page }) => {
  await page.goto("http://localhost:8081/");
  await page.waitForTimeout(3000);
  const rgb: { r: number; g: number; b: number } | null = hexToRgb(
    colors["beige"]
  );
  if (rgb)
    expect(page.locator(".product-widget-header").nth(2)).toHaveCSS(
      "background-color",
      "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"
    );
});

test("Only one widget can have the active state at a time", async ({
  page,
}) => {
  await page.goto("http://localhost:8081/#/");

  await page
    .locator(
      "div:nth-child(1) > .product-widget-content > div:nth-child(3) > .toggle > .toggle-view > .toggle-state"
    )
    .click();
  await expect(page.locator("#activateBadgeid_1")).toBeChecked();
  await expect(page.locator("#activateBadgeid_2")).not.toBeChecked();
  await expect(page.locator("#activateBadgeid_3")).not.toBeChecked();
  await page
    .locator(
      "div:nth-child(2) > .product-widget-content > div:nth-child(3) > .toggle > .toggle-view > .toggle-state"
    )
    .click();
  await expect(page.locator("#activateBadgeid_1")).not.toBeChecked();
  await expect(page.locator("#activateBadgeid_2")).toBeChecked();
  await expect(page.locator("#activateBadgeid_3")).not.toBeChecked();
  await page
    .locator(
      "div:nth-child(3) > .product-widget-content > div:nth-child(3) > .toggle > .toggle-view > .toggle-state"
    )
    .click();
  await expect(page.locator("#activateBadgeid_1")).not.toBeChecked();
  await expect(page.locator("#activateBadgeid_2")).not.toBeChecked();
  await expect(page.locator("#activateBadgeid_3")).toBeChecked();
});
