import { useForm } from 'react-hook-form'

// less code
// better validation
// better Erros(set, clear, display)
// have control over inputs
// Dont deal with events 
// Easier Inputs


export default function Forms(){
   const {register, watch} = useForm()
   console.log(watch())


    return (
        <form>
            <input  {...register("username")} type="text"   placeholder="UserName" required minLength={5}></input>
            <input {...register("email")} type="email"    placeholder="Email" required></input>
            <input {...register("password")} type="password"   placeholder="Password" required></input>
            <input type="submit" value="Create Account"  />
        </form>
    )
}