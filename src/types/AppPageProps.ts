import { Cookies } from './Cookies';
import { PublicHeaders } from './PublicHeaders';
import { UserSemiPersistentSession } from './UserSemiPersistentSession';

/**
 * Page props provided universally to the main app render function by the main app getInitialProps function
 *
 * The exact same properties are provided, whether during a server or client rendering
 *
 * @see _app:getInitialProps - Returns it (consumed by the "render" function)
 * @see _app:render - Use it (as its "pageProps" property)
 */
export type AppPageProps = {
  headers: PublicHeaders; // Headers made public to the client-side
  readonlyCookies: Cookies; // Cookies retrieved using https://www.npmjs.com/package/next-cookies - Aren't really readonly but don't provide any setter
  userSession: UserSemiPersistentSession;
  lang: string;
  isSSRReadyToRender: boolean;
  dataProvider: any; // TODO type it
  isSSR: boolean;
};
