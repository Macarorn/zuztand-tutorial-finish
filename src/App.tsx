import { useEffect } from "react";

import { useContenStore } from "./store/counterStore";

import { shallow } from "zustand/shallow";

import { Button, MantineProvider, Title } from "@mantine/core";

function Demo() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}

function App() {
  const { title, count, posts } = useContenStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPosts, clearStore, multiply } = useContenStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Title>
        {title}: {count}
      </Title>

      <Button
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
        p="xs"
        m="xs"
        onClick={() => {
          increment(10);
        }}
      >
        Increment by 10
      </Button>

      <Button
        p="xs"
        m="xs"
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
        onClick={() => clearStore()}
      >
        clear
      </Button>

      <Button
        p="xs"
        m="xs"
        variant="gradient"
        gradient={{ from: "teal", to: "blue", deg: 60 }}
        onClick={() => multiply(2)}
      >
        multiply by 2
      </Button>

      <hr />

      {/* {JSON.stringify(posts)} */}
    </div>
  );
}

export default App;
