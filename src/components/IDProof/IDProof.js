import { useForm } from "react-hook-form";
import "../CBAddress/CBA.scss";

const IDProof = ({ data, setData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="IDProof">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          ID proof type
          <input {...register("idproof")} value="Aadhar card" />
        </label>
        <label>
          ID Number
          <input {...register("IDNumber")} value="0123 4567 8912" />
        </label>
        <label>
          Date of issue
          <input {...register("DOI")} type="date" placeholder="DD/MM/YYYY" />
        </label>
        <label>
          Expiry date
          <input {...register("Expiry")} type="date" placeholder="DD/MM/YYYY" />
        </label>
        <label>
          Passport number
          <input {...register("passport")} />
        </label>
        <label>
          Place of issue
          <input {...register("poi")} />
        </label>
        <label>
          Date of issue
          <input {...register("doi2")} type="date" placeholder="DD/MM/YYYY" />
        </label>
        <label>
          Expiry date
          <input
            {...register("expiry2")}
            type="date"
            placeholder="DD/MM/YYYY"
          />
        </label>
        <label>
          Visa number
          <input {...register("visa")} />
        </label>
        <label>
          Place of issue
          <input {...register("poi2")} />
        </label>
        <label>
          Date of issue
          <input {...register("dokk")} type="date" placeholder="DD/MM/YYYY" />
        </label>
        <label>
          Expiry date
          <input {...register("edate")} type="date" placeholder="DD/MM/YYYY" />
        </label>
      </form>
      <hr />
    </div>
  );
};

export default IDProof;
