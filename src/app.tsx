import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/http";
import { Nav } from "~/components/composite/nav";
import { SiteTitle } from "~/components/seo/site-title";
import { Flex } from "~/components/ui/flex";
import { Muted } from "~/components/ui/typography";
import "./app.css";

function getServerCookies() {
  "use server";
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie
  );

  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <ColorModeScript storageType={storageManager.type} />
          <ColorModeProvider storageManager={storageManager}>
            <SiteTitle>pitchtoss!</SiteTitle>
            <Nav />
            <Suspense>{props.children}</Suspense>
            <Flex class="absolute bottom-0" justifyContent="center">
              <Muted class="text-sm">
                made with ❤️ by{" "}
                <a
                  href="https://x.com/lightyaer"
                  target="_blank"
                  rel="noreferrer"
                >
                  lightyaer
                </a>
              </Muted>
            </Flex>
          </ColorModeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
