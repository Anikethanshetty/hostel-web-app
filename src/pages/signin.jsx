import {Input} from "../components/inputbox"
import {Heading} from "../components/heading"
import {Button} from "../components/button"


export const Signin = ()=>{

    return <div className="bg-gray-300 min-h-screen grid place-items-center ">
    <div className="bg-white h-signup-box w-signup-box rounded-lg mt-16 mb-16 pb-6">
        <div className="flex justify-center">
    <Heading label={"Sign in"} />
        </div>
    <div className="flex items-center justify-center mt-6">
<div className="mt-5 flex flex-col">
<Input type={"text"} label={"Email.."} />
<Input type={"text"} label={"Password.."} />
</div>
</div>
   <div className="flex justify-center">
   <Button label={"Sign In"} />
   </div>
   
    </div>
</div>
}