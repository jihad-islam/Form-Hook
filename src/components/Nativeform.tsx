import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Sothik email dite hobe")
    .required("Email is required"),
  age: yup
    .number()
    .typeError("Value must be a number")
    .required("Age is required"),
  dob: yup
    .date()
    .typeError("Value must be a date")
    .required("Date of Birth is required"),
});

// interface IFormPayload extends yup.Asserts<typeof validationSchema> {}
type IFormPayload = yup.Asserts<typeof validationSchema>;

const Nativeform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormPayload>({
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = (data: IFormPayload) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="flex flex-col gap-4 w-full max-w-md p-6 border rounded shadow-md"
      >
        {/* name  */}
        <div className="flex flex-col">
          <label htmlFor="name"> Name</label>

          <input
            type="text"
            id="name"
            className="p-2 border"
            placeholder="Your Name"
            {...register("name")}
          />

          <ErrorMessage
            errors={errors}
            name={"name"}
            render={(m) => <p className="text-red-500">{m.message}</p>}
          />
        </div>

        {/* email  */}
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            className="p-2 border"
            placeholder="Your Email"
            {...register("email")}
          />

          {errors.email && <p>{error.name.message}</p>}

          {/* <ErrorMessage
            errors={errors}
            name={"email"}
            render={(m) => <p className="text-red-500">{m.message}</p>}
          /> */}
        </div>

        {/* age  */}
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>

          <input
            type="number"
            id="age"
            className="p-2 border"
            placeholder="Your Age"
            {...register("age", { valueAsNumber: true })}
          />

          <ErrorMessage
            errors={errors}
            name={"age"}
            render={(m) => <p className="text-red-500">{m.message}</p>}
          />
        </div>

        {/* date of birth */}
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>

          <input
            type="date"
            id="age"
            className="p-2 border"
            placeholder="Date of Birth"
            {...register("dob", { valueAsDate: true })}
          />

          <ErrorMessage
            errors={errors}
            name={"dob"}
            render={(m) => <p className="text-red-500">{m.message}</p>}
          />
        </div>

        {/* button  */}
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
};

export default Nativeform;
