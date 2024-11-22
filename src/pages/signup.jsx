import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { Input } from "../components/inputbox"

export const Signup = ()=>{
    return <div className="bg-gray-300 min-h-screen grid place-items-center ">
        <div className="bg-white h-signup-box w-signup-box rounded-lg mt-16 mb-16 pb-6">
          <div className="flex justify-center">
        <Heading label={"Sign up"} />
          </div>
        <div className="flex items-center justify-center mt-6">
  <div className="mt-5 flex flex-col">
    <Input type={"text"} label={"Enter your firstname.."} />
    <Input type={"text"} label={"Enter your lastname.."} />
    <Input type={"email"} label={"Enter your email.."} />
    <Input type={"password"} label={"Enter your password.."} />
    <Input type={"text"} label={"Enter your usn.."} />
    <Input type={"text"} label={"Enter your year.."} />
    <Input type={"text"} label={"Enter your block.."} />
    <Input type={"text"} label={"Enter your room-number.."} />
  </div>
</div>
  <div className="flex justify-center">
  <Button label={"Sign Up"} />
  </div>
        </div>
    </div>
}