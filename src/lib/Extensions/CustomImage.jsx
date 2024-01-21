import Image from "@tiptap/extension-image";

const CustomImage = Image.extend({
  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      style: {
        default: "width: 100%; height: auto; cursor: pointer;",
      },
    };
  },
  addNodeView() {
    return ({ node, editor, getPos }) => {
      const {
        view,
        options: { editable },
      } = editor;

      const { src, alt, style } = node.attrs;

      const $container = document.createElement("div");
      $container.className = "image";

      const $img = document.createElement("img");
      $container.appendChild($img);

      $img.setAttribute("src", src);
      $img.setAttribute("alt", alt);
      $img.setAttribute("style", style);
      $img.setAttribute("draggable", "true");

      if (!editable) return { dom: $img };

      const dotsPosition = [
        "top: 50%; left: -10px; transform: translateY(-50%); cursor: w-resize;",
        "top: 50%; right: -10px; transform: translateY(-50%); cursor: e-resize;",
      ];

      let isResizing = false;
      let startX, startWidth, startHeight;

      $container.addEventListener("click", () => {
        $container.setAttribute(
          "style",
          `position: relative; 
          box-shadow: 0 0 0 2px var(--info); 
          ${style}`
        );

        Array.from({ length: 2 }, (_, index) => {
          const $dot = document.createElement("div");
          $dot.setAttribute(
            "style",
            `position: absolute; 
             width: 20px; 
             height: 20px; 
             border: 2px solid var(--info);
             background: var(--info); 
             border-radius: 50px; 
             ${dotsPosition[index]}`
          );
          $dot.addEventListener("mousedown", (e) => {
            e.preventDefault();
            isResizing = true;
            startX = e.clientX;
            startWidth = $container.offsetWidth;
            startHeight = $container.offsetHeight;

            const onMouseMove = (e) => {
              if (!isResizing) return;
              const isEvenDot = (index + 1) % 2 === 0;

              let deltaX = e.clientX - startX;
              if (!isEvenDot) deltaX = -deltaX;

              const aspectRatio = startWidth / startHeight;
              const newWidth = startWidth + deltaX;
              const newHeight = newWidth / aspectRatio;
              $container.style.width = newWidth + "px";
              $container.style.height = newHeight + "px";
              $img.style.width = newWidth + "px";
              $img.style.height = newHeight + "px";
            };
            const onMouseUp = () => {
              if (isResizing) {
                isResizing = false;
              }
              if (typeof getPos === "function") {
                const newAttrs = Object.assign(Object.assign({}, node.attrs), {
                  style: `${$img.style.cssText}`,
                });
                view.dispatch(
                  view.state.tr.setNodeMarkup(getPos(), null, newAttrs)
                );
              }
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
            };
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          });
          $container.appendChild($dot);
        });
      });
      document.addEventListener("click", (e) => {
        if (!$container.contains(e.target)) {
          $container.removeAttribute("style");

          if ($container.childElementCount > 2) {
            for (let i = 0; i < 2; i++) {
              $container.removeChild($container.lastChild);
            }
          }
        }
      });
      return {
        dom: $container,
      };
    };
  },
});

export default CustomImage;
