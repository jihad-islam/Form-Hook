import { useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ name, age }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md p-6 border rounded shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="name"> Name</label>

          <input
            type="text"
            id="name"
            className="p-2 border"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlfor="age"> Age</label>

          <input
            type="number"
            id="age"
            className="p-2 border"
            placeholder="Your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasicForm;
