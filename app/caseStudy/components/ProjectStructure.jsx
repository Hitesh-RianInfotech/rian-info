import Image from "next/image";
import ProjectStructure2 from "./ProjectStructure2";

const ProjectStructure = () => {
  return (
    <section className="relative my-10 mt-20">
      <div className="max-w-5xl mx-auto text-center w-[90vw]">
      <h2 className="text-3xl font-bold flex items-center justify-start mb-10">
          <span className="mr-2">⏳</span> Project Structure:
        </h2>
       <div className="flex items-center gap-4">
                      <span className="text-themeColor">Widgets</span>
                      <Image
                        width={50}
                        height={50}
                        className=""
                        src="/images/aaa.png"
                        alt="mob"
                      />
                    </div>
      <div className="py-16 flex flex-wrap justify-center items-start gap-12">
      {/* Buttons Section */}
      <div className="border-2 border-dashed border-purple-300 p-6 rounded-lg">
        <div className="flex flex-col gap-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">Button Label</button>
          <button className="bg-white border border-gray-400 px-4 py-2 rounded-md">Button Label</button>
          <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md" disabled>
            Button Label
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md">Button Label</button>
          <button className="bg-white border border-gray-400 px-4 py-2 rounded-md">Button Label</button>
          <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md" disabled>
            Button Label
          </button>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="border-2 border-dashed border-purple-300 p-6 rounded-lg w-80">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded-md" placeholder="Value" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <input className="w-full border border-black px-3 py-2 rounded-md" placeholder="Value" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <input className="w-full border border-green-500 px-3 py-2 rounded-md" placeholder="Value" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <input className="w-full border border-red-500 px-3 py-2 rounded-md" placeholder="Value" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gray-100 text-gray-500"
              placeholder="Value"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Checkboxes and Radio Buttons Section */}
      <div className="border-2 border-dashed border-purple-300 p-6 rounded-lg">
        <div className="flex gap-12">
          {/* Checkboxes */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Value
              </label>
            </div>
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">Label</label>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" /> Value
              </label>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
            <Image width={400} height={400} className="absolute z-[-1] left-0 bottom-0" src="/images/pp.png" alt="pp" />
      
    </section>
  );
};

export default ProjectStructure;
