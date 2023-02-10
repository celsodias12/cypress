import 'cypress'
import { mount } from 'cypress/react18'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      getBySelector: (selector: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>) => Chainable<JQuery<HTMLElement>>
    }
  }
}
