import React from "react";

function AddProduct() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="w-[70vw] h-[65vh] rounded-lg bg-zinc-400 p-5">
        <h1 className="text-center text-3xl font-semibold">Add New Product</h1>
        <div className="w-full   flex items-center justify-between p-5 mt-5 ">
          <div className="w-[20vw] h-[40vh] bg-zinc-300 rounded-lg p-5">
            <div className="w-full h-[30vh] p-5 bg-zinc-100 rounded-lg"></div>
            <button className="px-4 py-2 rounded-lg bg-violet-500 text-white m-2 ml-14">
              Upload Image
            </button>
          </div>
          <div className="w-[33vw] h-[40vh] bg-zinc-300 rounded-lg p-5">
            <h2 className="text-xl">Add Name </h2>
            <h2 className="text-xl">Add Description </h2>
            <h2 className="text-xl">Add Price </h2>
          </div>
        </div>
        <div className="flex items-center justify-center" >
        <button className="px-5 py-2 bg-violet-600 text-white rounded-lg" >Submit</button>

        </div>
      </div>
    </div>
  );
}

export default AddProduct;
