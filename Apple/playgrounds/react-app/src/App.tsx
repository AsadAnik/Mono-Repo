import { Button, Color, Text } from '@apple/react/lib';

const App = () => {
  return (
    <>
      <h1>Hello Mono Repo</h1>

      <Button
        title="I am a cute button"
        onClick={() => alert('Hey')}
      >
        Hello Click
      </Button>

      <Color hexCode="pink" height="xxxl" width="xxxl" />

      <Text size="xl">Hello World</Text>
    </>
  );
};

export default App;