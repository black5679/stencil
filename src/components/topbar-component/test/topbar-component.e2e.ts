import { newE2EPage } from '@stencil/core/testing';

describe('topbar-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<topbar-component></topbar-component>');

    const element = await page.find('topbar-component');
    expect(element).toHaveClass('hydrated');
  });
});
