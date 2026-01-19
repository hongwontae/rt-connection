type Props = {
  name: string;
  age: number;
};

type ComponentProps = {
  Icon: React.ComponentType<Props>;
};

function PropsSection({ Icon }: ComponentProps) {
  return (
    <>
      <div>
        <Icon age={30} name="An JI YEON"></Icon>
      </div>
    </>
  );
}

export default PropsSection;
