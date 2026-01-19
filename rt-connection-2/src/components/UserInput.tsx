import { useState } from "react";

type StateType = {
  name: string;
  age: number;
  address: string;
  email: string;
};

function UserInput() {
  const [data, setData] = useState<StateType>({
    name: "No Name",
    age: 0,
    address: "UJB",
    email: "dnjsxoghd@naver.com",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    identifier: string,
  ) => {

    const value = event.currentTarget.value;

    setData((prev)=>{
        return {
            ...prev,
            [identifier] : identifier == "age" ? Number(value) : value
        }
    })
  };

  return (
    <>
      <div>
        <label>User Name</label>
        <input
          value={data.name}
          onChange={(e) => handleChange(e, "name")}
        ></input>
      </div>
      <div>
        <label>User Age</label>
        <input
          value={data.age}
          type="number"
          onChange={(e) => handleChange(e, "age")}
        ></input>
      </div>
      <div>
        <label>User Address</label>
        <input
          value={data.address}
          onChange={(e) => handleChange(e, "address")}
        ></input>
      </div>
      <div>
        <label>User Email</label>
        <input
          value={data.email}
          onChange={(e) => handleChange(e, "email")}
        ></input>
      </div>
      <div>
        <div>{data.name}</div>
        <div>{data.age}</div>
        <div>{data.address}</div>
        <div>{data.email}</div>
      </div>
    </>
  );
}

export default UserInput;
