import { useForm } from "react-hook-form";
import "./CBA.scss";

const CBAddress = ({ data, setData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="CBA">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Address Line 1
          <input {...register("Address-line1")} />
        </label>
        <label>
          Mobile Number
          <input {...register("Mobile-Number")} />
        </label>
        <label>
          Address Line 2
          <input {...register("Address-Line2")} />
        </label>
        <label>
          Residential phone number
          <input {...register("Residential-phonenumber")} />
        </label>
        <label>
          Address Line 2
          <input {...register("Address-Line3")} />
        </label>
        <label>
          Email 1
          <input {...register("Email1")} />
        </label>
        <label>
          City
          <input {...register("City")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <label>
          Email 2
          <input {...register("Email2")} />
        </label>
        <label>
          State
          <input {...register("State")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <label>
          Fax Number
          <input {...register("fax")} />
        </label>
        <label>
          Country
          <input {...register("Country")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <label>
          Nationality
          <input {...register("Nationality")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
      </form>
      <hr />
    </div>
  );
};

export default CBAddress;
