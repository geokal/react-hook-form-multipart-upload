import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res = await fetch("http://localhost:3000/upload-file", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
