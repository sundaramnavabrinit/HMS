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
          <input
            {...register("Address-line1")}
            value="B12, No.36, 1st street"
          />
        </label>
        <label>
          Mobile Number
          <input {...register("Mobile-Number")} value="9989833431" />
        </label>
        <label>
          Address Line 2
          <input {...register("Address-Line2")} value="Gandhi street" />
        </label>
        <label>
          Residential phone number
          <input {...register("Residential-phonenumber")} value="43588696" />
        </label>
        <label>
          Address Line 3
          <input {...register("Address-Line3")} value="Nehru nagar" />
        </label>
        <label>
          Email 1
          <input {...register("Email1")} value="sam@gmail.com" />
        </label>
        <label>
          City
          <input {...register("City")} value="Banglore" />
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <label>
          Email 2
          <input {...register("Email2")} />
        </label>
        <label>
          State
          <input {...register("State")} value="Karnataka" />
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <label>
          Fax Number
          <input {...register("fax")} />
        </label>
        <label>
          Country
          <input {...register("Country")} value="India" />
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <label>
          Nationality
          <input {...register("Nationality")} value="Indian" />
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </form>
      <hr />
    </div>
  );
};

export default CBAddress;
