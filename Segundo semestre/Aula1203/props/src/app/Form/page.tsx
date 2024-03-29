"use client"
import { useState } from "react";
import UseForm from "./useForm";

const Form : React.FC = () => {

    const [userDetails, setUserDetails] = useState<any>(null)

    const handleSubmit = (userData : any) => {
        setUserDetails(userData);
    }

    return(
        <>
            <UseForm onSubmit={handleSubmit}/>
            {
                userDetails && (
                    <div>
                        <p><b>Nome: </b>{userDetails.nome}</p>
                        <p><b>E-mail: </b>{userDetails.email}</p>
                        <p><b>Idade: </b>{userDetails.idade}</p>
                    </div>
                )
            }
        </>
    )
}

export default Form;


