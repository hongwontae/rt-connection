import { useActionState } from "react";

type State = {
  error: string[] | null;
};

function TestUserForm() {
  function actionHandler(prevState: State, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    let errors: string[] = [];

    if (typeof email == "string" && email.length <= 8) {
      errors.push("Email length at least 8");
    }

    if (typeof password == "string" && password.length <= 5) {
      errors.push("password length at least 5");
    }

    return {
      error: errors.length > 0 ? errors : null,
    };
  }

  const [formState, formAction, isPending] = useActionState<State, FormData>(
    actionHandler,
    { error: null },
  );

  console.log(formState);
  console.log(isPending);

  return (
    <>
      <form action={formAction}>
        <div className="flex flex-row gap-3">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded-2xl"
            id="email"
            type="email"
            name="email"
          ></input>
        </div>
        <div className="flex flex-row gap-3">
          <label htmlFor="password">Password</label>
          <input
            className="border rounded-2xl"
            id="password"
            type="password"
            name="password"
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {formState.error && (
          <div>
            {formState.error.map((ele, idx) => (
              <div key={idx}>{ele}</div>
            ))}
          </div>
        )}
      </form>
    </>
  );
}

export default TestUserForm;
