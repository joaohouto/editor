import { Toaster } from "react-hot-toast";
import { Editor } from "./lib";

const content = ``;

function fileUploader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: "abc",
        url: "https://my-acad.web.app/icon.svg",
      });
    }, 1000);
  });
}

function App() {
  return (
    <div>
      <Toaster />
      <Editor
        defaultContent={content}
        onUpdate={({ editor }) => console.log(editor.getHTML())}
        fileUploader={fileUploader}
        placeholder="Comece a escrever..."
      />
    </div>
  );
}

export default App;
