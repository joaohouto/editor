import { Toaster } from "react-hot-toast";
import { Editor } from "./lib";

const content = ``;

function App() {
  return (
    <div>
      <Toaster />
      <Editor
        defaultContent={content}
        onUpdate={({ editor }) => console.log(editor.getHTML())}
        placeholder="Comece a escrever..."
      />
    </div>
  );
}

export default App;
