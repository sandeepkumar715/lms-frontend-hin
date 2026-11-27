import { useState } from "react";
import {toast} from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { isEmail, isValidPassword } from "../Helper/regexMatcher";

function Signup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage,setPreviewImage] = useState("");

    const [SignupData,setSignupData] = useState({
        fullName: "",
        email:"",
        password:"",
        avatar:""
    });

    function handleUserInput(e){
        const {name,value} = e.target;
        setSignupData({
            ...SignupData,
            [name]: value
        })

    }
    function getImage(event){
        event.preventDefault();
        //getting the image
        const uploadedImage = event.target.files[0];
        if(uploadedImage){
            setSignupData({
                ...SignupData,
                avatar:uploadedImage
            })
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function(){
                
                setPreviewImage(this.result);
            })
        }
    }
     async function createNewaccount(event){
        event.preventDefault();
        if(!SignupData.email || !SignupData.password || !SignupData.fullName || !SignupData.avatar){
            toast.error("please fill all the details");
            return;
        }
        //checking name field length
        if(SignupData.fullName.length <5){
            toast.error("Name should be atleast of 5 character");
            return;

        }
        //checking valid email
        if(!isEmail(SignupData.email)){
            toast.error("invalid email");
            return;
        }
        //checking password 
        if(!isValidPassword(SignupData.password)){
            toast.error("password should be atleast 6-16 character long with atleast a number and a special character");
            return;
        }
        const formData = new FormData();
        formData.append("fullName",SignupData.fullName);
        formData.append("email",SignupData.email);
        formData.append("password",SignupData.password);
        formData.append("avatar",SignupData.avatar);

        //dispatch create account action
        const response = await dispatch(createAccount(formData));
        console.log(response);
        if(response?.payload?.success)
             navigate("/");

        setSignupData({
         fullName: "",
        email:"",
        password:"",
        avatar:""

        });
        setPreviewImage("");

    }
    return(
       <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]  ">
                <form  noValidate onSubmit={createNewaccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold">Registration Page</h1>
                    <label htmlFor="image-uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                        ):(
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                        )}

                    </label>
                    <input
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image-uploads"
                        accept=".jpg,.jpeg,.png,.svg"
                    />
                     <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="font-semibold">Full Name</label>
                            <input
                             type="text"
                             required
                              name="fullName"
                              id="fullName"
                              placeholder="Enter your Full Name "
                              className="bg-transparent px-2 py-1 border"
                              onChange={handleUserInput}
                              value={SignupData.fullName}
                             />
                             </div>
                    <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input
                             type="email"
                             required
                              name="email"
                              id="email"
                              placeholder="Enter your Email id "
                              className="bg-transparent px-2 py-1 border"
                              onChange={handleUserInput}
                              value={SignupData.email}
                             />
                             </div>
                    <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input
                             type="password"
                             required
                              name="password"
                              id="password"
                              placeholder="Enter your password "
                              className="bg-transparent px-2 py-1 border"
                               onChange={handleUserInput}
                              value={SignupData.password}
                             />
                    </div>
                    <button  type="submit" className="mt-2 bg-yellow-700 hover:bg-yellow-600 py-2 font-semibold text-large cursor-pointer transition-all ease-in-out duration-300 rounded-md">
                        Create account
                    </button>
                    <p className="text-center">
                        Already have an account ? <Link to="/login" className="link text-accent cursor-pointer ">Login</Link>

                    </p>
                </form>

            </div>
       </HomeLayout>
    )
}
export default Signup;