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

    setData((prev) => {
      return {
        ...prev,
        [identifier]: identifier == "age" ? Number(value) : value,
      };
    });
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 justify-center items-center">
        <div className="flex gap-4 items-center">
          <label className="uppercase">User Name</label>
          <input
            className="border rounded-2xl p-1"
            value={data.name}
            onChange={(e) => handleChange(e, "name")}
          ></input>
        </div>
        <div className="flex gap-4 items-center">
          <label className="uppercase">User Age</label>
          <input
            className="border rounded-2xl p-1"
            value={data.age}
            type="number"
            onChange={(e) => handleChange(e, "age")}
          ></input>
        </div>
        <div className="flex gap-4 items-center">
          <label className="uppercase">User Address</label>
          <input
            className="border rounded-2xl p-1"
            value={data.address}
            onChange={(e) => handleChange(e, "address")}
          ></input>
        </div>
        <div className="flex gap-4 items-center">
          <label className="uppercase">User Email</label>
          <input
            className="border rounded-2xl p-1"
            value={data.email}
            onChange={(e) => handleChange(e, "email")}
          ></input>
        </div>
      </div>

      <div className="flex flex-row gap-9">
        <div>{data.name}</div>
        <div>{data.age}</div>
        <div>{data.address}</div>
        <div>{data.email}</div>
      </div>
    </>
  );
}

export default UserInput;
