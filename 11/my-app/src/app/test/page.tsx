export default function TestPage() {
  const num = 2 * 4;
  console.log(`num: ${num}`);

  return (
    <>
      <h1>Test page</h1>
      <p>num: {num}</p>
      {/* <p>Text: {text}</p>
      <input
        className="bg-gray-100"
        type="text"
        onChange={(e) => setText(e.target.value)}
      /> */}
      <div>{/* ここにClient Conponentを差し込む */}</div>
    </>
  );
}
