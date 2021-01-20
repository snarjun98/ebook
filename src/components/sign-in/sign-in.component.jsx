import './sigin-in.style.scss';
import '../form-input/form-input.component'
import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
import { auth,signInWithGoogle} from '../../firebase/firebase.utilite';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { email ,password}=this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'',password:''});

        }catch(error){
            alert(error);
        }

    }

    handleChange= event =>{
        const { value , name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email}  handleChange={this.handleChange} label='Email' required/>
                    <FormInput name='password' type='password' value={this.state.password}  handleChange={this.handleChange} label='Password' required/>
                    <div className='buttons' ><CustomButton type='submit'>Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignin>{' '}Sign in with Google{' '}</CustomButton>
        </div>
                </form>
   
            </div>
        );
    }
}

export default Signin;