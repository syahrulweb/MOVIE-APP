// import React from "react";

function Counter() {
  // Membuat variable result
  let result = 0;

  /**
   * Membuat fungsi handleClick.
   * Dijalankan ketika button diklik.
   */
  function handleClick() {
    result = result + 1;
   // Agar bisa melihat hasil perubahan di console
  }

  // Menambahkan event click pada button
  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Counter;
