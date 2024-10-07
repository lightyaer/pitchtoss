import { SiteTitle } from "~/components/seo/site-title";
import { Flex } from "~/components/ui/flex";
import { Link, P, Text } from "~/components/ui/typography";

export default function AboutPage() {
  return (
    <main>
      <SiteTitle>About</SiteTitle>
      <Flex flexDirection="col" justifyContent="center" class="gap-4">
        <P>
          i'm an independent web developer, trying to make web a better place.
        </P>
        <P>
          if you think this app helped you in learning that guitar/piano/violin
          or drums, you can{" "}
          <Link
            target="_blank"
            class="underline"
            href="https://www.buymeacoffee.com/lightyaer"
          >
            buy me a beer
          </Link>
        </P>
        <Text>or</Text>
      </Flex>

      <Flex flexDirection="col" class="gap-4">
        <Text>
          if you live in <span class="text-2xl"> 🇮🇳 </span>, you can just upi on
          this qr
        </Text>
        <img src="/cred-qr-code.jpg" width="300px" alt="qr code" />
      </Flex>
    </main>
  );
}
