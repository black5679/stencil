import { newSpecPage } from '@stencil/core/testing';
import { TopbarComponent } from '../topbar-component';

describe('topbar-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TopbarComponent],
      html: `<topbar-component></topbar-component>`,
    });
    expect(page.root).toEqualHtml(`
      <topbar-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </topbar-component>
    `);
  });
});
