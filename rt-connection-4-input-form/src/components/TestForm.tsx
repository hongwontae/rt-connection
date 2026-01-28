import { useState } from "react";

type InputDataType = {
  email: string;
  password: string;
};



function TestForm(){
  const [inputData, setInputData] = useState<InputDataType>({
    email: "",
    password: "",
  });

  function changeHandler(
    identifier: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = event.target.value;

    setInputData((prev) => {
      return {
        ...prev,
        [identifier]: value,
      };
    });
  }

  function submitHandler(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key)=>{
      console.log(key)
      console.log(value);
    })
  }

  function resetHandler(){
    setInputData({email : "", password : ""});
  }

  return (
    <>
      <form onSubmit={(e)=>submitHandler(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={inputData.email}
            onChange={(e) => {
              changeHandler("email", e);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="number"
            name="password"
            value={inputData.password}
            onChange={(e) => {
              changeHandler("password", e);
            }}
          ></input>
        </div>
        <div>
          <button type="button" onClick={resetHandler}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default TestForm;