
import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { ERRORS_DICTIONARY } from "../../utils/errorsDictionary";

const Form = () => {
  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const submit = (formData) => {
    alert("Check the browser console to see your data")
    console.log(formData)
};

  return (
    <form onSubmit={handleSubmit(submit)} noValidate>
      <div className="field">
        <Input
          inputName="name"
          inputType="text"
          register={register}
          isRequired={true}
          requiredMessage={ERRORS_DICTIONARY.name.nameIsRequired}
        />
        {formState.errors.name ? (
          <ErrorMessage error={formState.errors.name.message} />
        ) : null}
      </div>

      <div className="field">
        <Input
          inputName="email"
          inputType="email"
          register={register}
          isRequired={true}
          requiredMessage={ERRORS_DICTIONARY.email.emailIsRequired}
          regexPattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[com]{3,}$/}
          patternMessage={ERRORS_DICTIONARY.email.emailPattern}
        />
        {formState.errors.email ? (
          <ErrorMessage error={formState.errors.email.message} />
        ) : null}
      </div>

      <div className="field">
        <Input
          inputName="password"
          inputType="password"
          register={register}
          isRequired={true}
          requiredMessage={ERRORS_DICTIONARY.password.passwordIsRequired}
          regexPattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/}
          patternMessage={ERRORS_DICTIONARY.password.passwordPattern}
          minLengthValue={8}
          lengthMessage={ERRORS_DICTIONARY.password.passwordMinLength}
        />
        {formState.errors.password ? (
          <ErrorMessage error={formState.errors.password.message} />
        ) : null}
      </div>

      <button type="submit" disabled={!formState.isDirty}>
        Register
      </button>
    </form>
  );
};

export default Form;
