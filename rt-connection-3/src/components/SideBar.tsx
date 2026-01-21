import type { DataType } from "../App";

type Props = {
  data: DataType[] | null;
};

function SideBar({ data }: Props) {
  return <>{data ? <section>
    <div>
        {data?.map(({title,des,id}, idx, arr)=>{
            return <div key={id} className="flex flex-col gap-2 border">
                <div>{title}</div>
                <div>{des}</div>
            </div>
        })}
    </div>
  </section> : <div>Empty To do</div>}</>;
}

export default SideBar;
