type Props = {
  setPageChange: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateContentBody({ setPageChange }: Props) {
  return (
    <>
      <section>
        <button onClick={() => setPageChange(true)}>Create Project</button>
      </section>
    </>
  );
}

export default CreateContentBody;
