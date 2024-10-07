import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import { Illustration404 } from "~/components/illustrations/404";
import { Flex } from "~/components/ui/flex";
import { Text } from "~/components/ui/typography";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <Flex
        flexDirection="col"
        justifyContent="center"
        alignItems="center"
        class="gap-10"
      >
        <Illustration404 />
        <Text>Sorry, the page you are looking for doesn't exist.</Text>
      </Flex>
    </main>
  );
}
