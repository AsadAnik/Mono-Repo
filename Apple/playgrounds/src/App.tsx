import { Button } from '@apple/react/lib';
import '@apple/scss/lib/Button.css';

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
    </>
  );
};

export default App;