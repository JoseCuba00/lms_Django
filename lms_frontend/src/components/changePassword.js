import React, {useContext,useState} from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

function ChangePassword() { 

    const { user } = useContext(AuthContext)
    const [passwordMatch, setPasswordMatch] = useState(true)
    const navigate = useNavigate()

    const successAlert = () => {
        navigate('/')
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert-popup';
        alertDiv.textContent = '✓ Contraseña ha sido cambiada con éxito';
        document.body.appendChild(alertDiv);
    
        setTimeout(() => {
            document.body.removeChild(alertDiv);
           // Reemplaza '/otra-pagina' con la ruta a la que deseas redirigir
        }, 3000);
    }

    const update_password = async (e) => {
        setPasswordMatch(true)
        e.preventDefault()
        if (e.target[0].value === e.target[1].value){
            await axios
            .put( `http://127.0.0.1:8000/account/change_password/${user.user_id}`, {
                password: e.target[0].value
            })
            .then(async (response) => {
                successAlert()
            })
            .catch(async (err) => {
                console.log(err);
            })}
            else{
                setPasswordMatch(false)
            }
        }
        const showPassword = () => {
            var passwordInputs = document.querySelectorAll('input[type=password]');
            var textInputs = document.querySelectorAll('input[type=text]');
          
            var inputs = [...passwordInputs, ...textInputs];
          
            inputs.forEach((input) => {
              if (input.type === "password") {
                input.type = "text";
              } else {
                input.type = "password";
              }
            });
          }
          
        return (
        <div className="container mt-4 justify-content-sm-center">
            
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={update_password} >
                                <div className="mb-3">
                                    <label for='InputPassword1' className="form-label">New password</label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label for='InputPassword2' className="form-label">Confirm password</label>
                                    <input type='password' className="form-control" id='InputPassword1'></input>
                                    <input type="checkbox" id='showPassword' onClick={()=>showPassword()}></input>
                                    <label for='showPassword' className="form-label pl-2">Show password</label>
                                    
                                </div>
                                
                                {!passwordMatch && <p className="text-danger">Las contraseñas no son iguales</p>}
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    );
}

export default ChangePassword;