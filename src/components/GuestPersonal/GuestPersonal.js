import "./GuestPersonal.scss";
import { useForm } from "react-hook-form";
import "../CBAddress/CBA.scss";

const GuestPersonal = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.info(data);
  };

  return (
    <div className="GuestPersonal">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title
          <input value="Mr." {...register("title")} />
        </label>
        <label>
          Surname
          <input value="A" {...register("surname")} />
        </label>
        <label>
          First Name
          <input value="Amrit" {...register("firstName")} />
        </label>
        <label>
          Last Name
          <input value="Deshpande" {...register("lastname")} />
        </label>
        <label>
          EMail address
          <input value="amritdeshpande@gmail.com" {...register("email")} />
        </label>
        <label>
          Phone number
          <input value="8023457823" {...register("phone-number")} />
        </label>
        <label>
          Date of Birth
          <input value="19/11//1995" {...register("dob")} type="date" />
        </label>
        <label>
          Wedding anniversary date
          <input
            value={new Date("20/08/2020")}
            {...register("weddingdate")}
            type="date"
            placeholder="DD/MM/YYYY"
            style={{
              padding: "8px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default GuestPersonal;
