import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };5

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="name"
            {...register("name")}
          />
      
          {errors.age && <span>This field is required</span>}
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default HookForm;
