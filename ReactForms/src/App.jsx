import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const delayTime = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time * 1000);
    });
  };

  const onSubmit = async (data) => {
    setIsSubmit(true);
    await delayTime(2);
    console.log(data);
    setIsSubmit(false);
  };

  return (
    <>
      {isSubmit && <div>Loading ...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "This feild is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            placeholder="Enter name"
            type="text"
            name="username"
            id=""
          />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input
            {...register("password", {
              required: { value: true, message: "This feild is true" },
              minLength: { value: 7, message: "Minimum length required is 7" },
            })}
            type="password"
            placeholder="Enter password"
            name="password"
            id=""
          />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmit} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
