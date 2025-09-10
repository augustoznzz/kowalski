"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-lime text-black p-8">
      <h1 className="text-4xl font-bold mb-4">CSS Test Page</h1>
      <div className="bg-black text-lime p-4 rounded-lg mb-4">
        <p>This should be black background with lime text</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 p-4 text-white rounded">Red Box</div>
        <div className="bg-blue-500 p-4 text-white rounded">Blue Box</div>
      </div>
      <button className="bg-lime text-black px-4 py-2 mt-4 rounded hover:bg-lime-dark transition-colors">
        Test Button
      </button>
    </div>
  );
}
