import { useForm } from "react-hook-form";
import "./CBPersonal.scss";

const CBPersonal = ({ data, setData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="CBP">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Guest 1 title
          <select
            {...register("Guest1-title", { required: true })}
            className="minimal"
          >
            <option value="male">Mr.</option>
            <option value="femail">Mrs.</option>
          </select>
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
          Guest Surname
          <input {...register("Guest-Sur-Name")} value="A" />
        </label>
        <label>
          Guest 1 First Name
          <input {...register("Guest1-First-Name")} value="Amrit" />
        </label>
        <label>
          Guest 1 Last Name
          <input {...register("Guest1-Last-Name")} value="Deshpande" />
        </label>
        <label>
          Guest 1 Email address
          <input
            {...register("Guest1-Email-address")}
            value="amritdeshpande@gmail.com"
          />
        </label>
        <label>
          Guest 1 Mobile Number
          <input {...register("Guest1-Mobile-Number")} value="8012376554" />
        </label>
        <label>
          Guest 1 Date of Birth
          <input {...register("Guest1-DOB")} type="date" />
        </label>
        <label>
          Guest 1 Wedding Anniversary date
          <input {...register("Guest1-Wedding")} type="date" />
        </label>
        <label>
          Guest 2 Full Name
          <input {...register("Guest2-Full-Name")} />
        </label>
        <label>
          Guest 2 Date of Birth
          <input {...register("Guest2-DOB")} type="date" />
        </label>
        <label>
          Guest 3 Full Name
          <input {...register("Guest3-Full-Name")} />
        </label>
        <label>
          Guest 3 Date of Birth
          <input {...register("Guest3-DOB")} type="date" />
        </label>
      </form>
      <hr />
    </div>
  );
};

export default CBPersonal;
