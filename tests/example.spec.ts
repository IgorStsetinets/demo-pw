import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Wait for the "Get started" link to be visible and ensure it's not covered
  const getStartedLink = page.getByRole('link', { name: 'Get started' })
  await getStartedLink.waitFor({ state: 'visible' }) // Wait until it's visible

  // Ensure the element is not obscured by scrolling into view
  await getStartedLink.scrollIntoViewIfNeeded()

  // Use force click to bypass obstruction, if any
  await getStartedLink.click({ force: true })

  // Expects page to have a heading with the name "Installation"
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
})
