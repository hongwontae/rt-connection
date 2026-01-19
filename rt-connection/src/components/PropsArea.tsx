type props = {
    kk : number;
    id : number;
    name : string
}

function PropsArea({kk, ...rest} : props){

    const a = rest.id;
    const b = rest.name;

    return(
        <>
            <div>
                <div>{a}</div>
                <div>{b}</div>
                <div>{kk}</div>
            </div>
        </>
    )
}

export default PropsArea;