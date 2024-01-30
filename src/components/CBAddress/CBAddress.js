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
        </label>
        <label>
          Email 2
          <input {...register("Email2")} />
        </label>
        <label>
          State
          <input {...register("State")} />
        </label>
        <label>
          Fax Number
          <input {...register("fax")} />
        </label>
        <label>
          Country
          <input {...register("Country")} />
        </label>
        <label>
          Nationality
          <input {...register("Nationality")} />
        </label>
      </form>
      <hr />
    </div>
  );
};

export default CBAddress;
