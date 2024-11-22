import { Heading } from "../components/heading"
import { Input } from "../components/inputbox"

export const Signup = ()=>{
    return <div className="bg-gray-300 min-h-screen grid place-items-center ">
        <div className="bg-white h-signup-box w-signup-box rounded-lg mt-16">
        <Heading label={"Sign up"} />
        <div className="mt-5">
        <Input type={"string"} label={"Enter your firstname.."}/>
        <Input type={"string"} label={"Enter your lastname.."}/>
        <Input type={"string"} label={"Enter your email.."}/>
        <Input type={"string"} label={"Enter your usn.."}/>
        <Input type={"string"} label={"Enter your year.."}/>
        <Input type={"string"} label={"Enter your block.."}/>
        <Input type={"string"} label={"Enter your room-number.."}/>

        </div>
        </div>
    </div>
}