import { useForm } from "react-hook-form";

const SingupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };
  const handleSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name
        <input {...register("name", { required: true })} />
      </label>
      <label>
        Age
        <input {...register("age")} />
      </label>
      <label>
        Address
        <input {...register("address")} />
      </label>
      <label>
        Zipcode
        <input {...register("zipcode")} />
      </label>
      <label>
        Phone
        <input {...register("phone")} />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SingupForm;
