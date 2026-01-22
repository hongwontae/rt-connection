import { useUser } from "../store/useUser";

function ContextTest() {
  const { setAge, setName, user } = useUser();

  return (
    <>
      <div>
        <label>Name</label>
        <input
          value={user.name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          value={user.age}
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
        ></input>
      </div>
      <div>{user.name}</div>
      <div>{user.age}</div>
    </>
  );
}

export default ContextTest;
