import google from "../assets/google.png";
import phone from "../assets/phone.png";
import guitar from "../assets/guitar.png";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/setup";

type popupProp={
  setLoginPopUp:any
}

function login({setLoginPopUp}:popupProp) {

  const googleSignin=async()=>{
    try { 
      await signInWithPopup(auth,googleProvider)
    } catch (error) {
      console.error(error);  
    }
  }



  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1 onClick={()=>setLoginPopUp(false)} className=" cursor-pointer font-semibold text-3xl">X</h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <img src={guitar} alt="" className="h-20 w-20 ml-24" />
                    <p className="text-base font-medium mt-5 text-center">
                      Help us to become one of the safest places<br></br>to buy and
                      sell.
                    </p>
                    <div className="flex border-2 border-black rounded-md p-2 mt-12 hover:border-4 cursor-pointer">
                      <img src={phone} alt="" className="h-6 w-6" />
                      <p className="font-semibold ml-3">Continue with phone</p>
                    </div>
                    <div onClick={googleSignin} className="flex border border-grey-300 rounded-md p-2 mt-4 cursor-pointer hover:border-blue-500 hover:bg-blue-100">
                      <img src={google} alt="" className="h-5 w-5" />
                      <p className="font-semibold ml-14">Continue with Google</p>
                    </div>
                    <p className="text-center mt-4 font-medium">OR</p>
                    <p className="text-center mt-4 font-semibold underline cursor-pointer">Login with Email</p>
                    <h1 className="text-gray-500 text-xs mt-28 text-center">All your personal details are safe with us.</h1>
                    <h1 className="text-gray-500 text-xs mt-3 text-center">If you continue, you are accepting <span className="text-blue-500 cursor-pointer">OLX Terms and<br></br>Conditions and Privacy Policy</span></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
