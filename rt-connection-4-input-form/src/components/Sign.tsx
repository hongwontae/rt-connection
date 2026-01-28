import { useState } from "react";

type UserType = {
  email: string;
  password: string;
};

type ErrorMessageType = {
  emailErrorMessage: string | null;
  passwordErrorMessage: string | null;
};

function Sign() {
  const [userInfo, setUserInfo] = useState<UserType>({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<Partial<Record<keyof UserType, string>>>({});

  function changeHalder(
    e: React.ChangeEvent<HTMLInputElement>,
    identifier: "email" | "password",
  ) {
    const value = e.currentTarget.value;

    setUserInfo((prev) => {
      return { ...prev, [identifier]: value };
    });
  }

  function blurHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    key : keyof UserType,
  ) {
    const inputValue = e.currentTarget.value;

    if (key === "email") {
      const status = inputValue.includes("@") && inputValue.length !== 0;
      status
        ? setErrorMessage(prev=>{
            return {...prev, emailErrorMessage : null}
        })
        : setErrorMessage((prev) => {
            return {
              ...prev,
              emailErrorMessage:
                "Email Address is required @ and Address at least 1",
            };
          });
    }

    if (key === "password") {
      const status = inputValue.length !== 0;
      status
        ? setErrorMessage((prev)=>{
            return {...prev, passwordErrorMessage : null}
        })
        : setErrorMessage((prev) => {
            return { ...prev, passwordErrorMessage: "Password at least 1" };
          });
    }

    return;
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(userInfo.email);
    console.log(userInfo.password);
  }

  return (
    <>
      <form onSubmit={(e)=>submitHandler(e)}>
        <div className="font-bold text-red-500">{errorMessage.email}</div>
        <div className="font-bold text-red-500">{errorMessage.password}</div>
        <div className="flex flex-row gap-8 mb-10">
          <div className="flex flex-row gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="border p-[0.4] rounded"
              value={userInfo.email}
              onChange={(e) => changeHalder(e, "email")}
              onBlur={(e) => blurHandler(e, "email")}
            ></input>
          </div>
          <div className="flex flex-row gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="border p-[0.4] rounded"
              value={userInfo.password}
              onChange={(e) => changeHalder(e, "password")}
              onBlur={(e) => blurHandler(e, "password")}
            ></input>
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Sign;
