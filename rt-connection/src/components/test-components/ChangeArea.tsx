type Props = {
    name : string;
    age : number
}

function ChangeArea({name, age} : Props){

    return(
        <>
            <div>Hello</div>
            <div>{name}</div>
            <div>{age}</div>
        </>
    )
}

export default ChangeArea;