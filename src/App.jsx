import { Toaster } from "react-hot-toast";
import { Editor } from "./lib";

const content = `

Comece a escrever algo...

`;

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
        fileUploader={fileUploader}
        onUpdate={(data) => null}
      />
    </div>
  );
}

export default App;
