import { useEffect, useState } from "react";

function Counter() {
  // Membuat state angka
  const [angka, setAngka] = useState(0);

  // Fungsi untuk menambah angka
  function addAngka() {
    setAngka(angka + 1);
  }

  useEffect(() => {
    // Fungsi side effect: update document title dan log saat mount dan angka berubah
    function manipulateDOM() {
      console.log("Lifecycle: Component mount/update");
      document.title = `Result: ${angka}`;
    }

    manipulateDOM();
  }, [angka]); // Dipanggil saat 'angka' berubah

  console.log("Lifecycle: Component render");

  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
