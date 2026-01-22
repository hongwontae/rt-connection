import {useForm} from 'react-hook-form';

function RHFSection(){

    const {register, handleSubmit,formState} = useForm();

    function submitHandler(data : any){
        console.log(data);
    }

    return(
        <>
            <form onSubmit={handleSubmit(submitHandler)}>
            <input {...register("email", {
                validate : (value : string)=>{
                    if(value.length >= 12){
                        return "12자 이상은 불가합니다."
                    } else {
                        return
                    }
                }
            })}></input>
            <input type='password' {...register("password")}></input>
            <button type='submit'></button>
            </form>
        </>
    )
}

export default RHFSection;