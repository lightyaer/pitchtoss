import { Generator } from "~/components/composite/generator";
import { SiteTitle } from "~/components/seo/site-title";
import { Flex } from "~/components/ui/flex";
import { Text } from "~/components/ui/typography";

export default function RandomPage() {
  return (
    <main>
      <SiteTitle>random pitch</SiteTitle>
      <Flex
        flexDirection="col"
        alignItems="center"
        justifyContent="center"
        class="gap-4"
      >
        <Text>generate random pitches</Text>
        <Generator />
      </Flex>
    </main>
  );
}
