import { Toaster } from "react-hot-toast";
import { Editor } from "./lib";
import { useLocalState } from "./localState";

function App() {
  const [data, setData] = useLocalState("@Editor", "");

  return (
    <div>
      <Toaster />
      <Editor
        defaultContent={data}
        onUpdate={({ editor }) => setData(editor.getHTML())}
        placeholder="Comece a escrever..."
      />
    </div>
  );
}

export default App;
