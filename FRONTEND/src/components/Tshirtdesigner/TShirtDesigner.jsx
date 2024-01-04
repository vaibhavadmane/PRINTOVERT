import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';

const TShirtDesigner = () => {
  useEffect(() => {
    const canvas = new fabric.StaticCanvas('tshirt-canvas');

    const updateTshirtImage = (imageURL) => {
      fabric.Image.fromURL(imageURL, (img) => {
        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
      });
    };

    document.getElementById('tshirt-color').addEventListener('change', function () {
      document.getElementById('tshirt-div').style.backgroundColor = this.value;
    }, false);

    document.getElementById('tshirt-design').addEventListener('change', function () {
      updateTshirtImage(this.value);
    }, false);

    document.getElementById('tshirt-custompicture').addEventListener('change', function (e) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imgObj = new Image();
        imgObj.src = event.target.result;

        imgObj.onload = function () {
          const img = new fabric.Image(imgObj);
          img.scaleToHeight(300);
          img.scaleToWidth(300);
          img.set({ left: 50, top: 50, selectable: true });
          canvas.add(img);
          canvas.renderAll();
        };
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    }, false);

    document.addEventListener('keydown', function (e) {
      const keyCode = e.keyCode;
      if (keyCode == 46) {
        canvas.remove(canvas.getActiveObject());
      }
    }, false);

    // Function to handle dragging of the image
    canvas.on('mouse:move', function (options) {
      if (canvas.isDragging) {
        const pointer = canvas.getPointer(options.e);
        const activeObject = canvas.getActiveObject();
        if (activeObject) {
          activeObject.left = pointer.x - activeObject.width / 2;
          activeObject.top = pointer.y - activeObject.height / 2;
          canvas.renderAll();
        }
      }
    });

    canvas.on('mouse:down', function (options) {
      canvas.isDragging = true;
    });

    canvas.on('mouse:up', function (options) {
      canvas.isDragging = false;
    });

    // Cleanup function
    return () => {
      canvas.off('mouse:move');
      canvas.off('mouse:down');
      canvas.off('mouse:up');
    };
  }, []);

  const exportTshirtImage = () => {
    html2canvas(document.getElementById('tshirt-div')).then((canvas) => {
      const image = canvas.toDataURL();
      console.log(image);
      // Do something with the generated image
    });
  };

  return (
    <div>
      <div id="tshirt-div" className="relative bg-white w-96 h-96 border-2 border-gray-300">
        <img
          id="tshirt-backgroundpicture"
          src="https://ourcodeworld.com/public-media/gallery/gallery-5d5afd3f1c7d6.png"
        />
        <div id="drawingArea" className="absolute top-12 left-24 z-10">
          <div className="w-48 h-96 relative border-2 border-gray-300">
            <canvas id="tshirt-canvas" width="200" height="400"></canvas>
          </div>
        </div>
      </div>
      <p>To remove a loaded picture on the T-Shirt select it and press the <kbd>DEL</kbd> key.</p>
      <label htmlFor="tshirt-design">T-Shirt Design:</label>
      <select id="tshirt-design" className="block mb-4">
        <option value="">Select one of our designs ...</option>
        <option value="https://ourcodeworld.com/public-media/gallery/gallery-5d5b0e95d294c.png">Batman</option>
      </select>
      <label htmlFor="tshirt-color">T-Shirt Color:</label>
      <select id="tshirt-color" className="block mb-4">
        <option value="#fff">White</option>
        <option value="#000">Black</option>
        <option value="#f00">Red</option>
        <option value="#008000">Green</option>
        <option value="#ff0">Yellow</option>
      </select>
      <label htmlFor="tshirt-custompicture">Upload your own design:</label>
      <input type="file" id="tshirt-custompicture" className="block mb-4" />
      <button onClick={exportTshirtImage} className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Export T-Shirt Image
      </button>
    </div>
  );
};

export default TShirtDesigner;
