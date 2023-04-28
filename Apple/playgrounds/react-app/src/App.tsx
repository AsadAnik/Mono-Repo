import { Button, Color } from '@apple/react/lib';

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

      <Color hexCode="#000" height="10rem" width="10rem" />
    </>
  );
};

export default App;