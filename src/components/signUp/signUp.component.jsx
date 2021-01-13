import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-button/custom-button.component';
import { auth,createUserProfileDocument} from '../../firebase/firebase.utilite';
import './signUp.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            type:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { displayName, email, password, confirmPassword ,type} = this.state;
    
        if (password !== confirmPassword) {
          alert("passwords don't match");
          return;
        }
    
        try {
          const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, {displayName,type});
    
          this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            type:''
          });
        } catch (error) {
          console.error(error);
        }
      };

    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    };

render(){
    const { displayName,email,password,confirmPassword }=this.state;
    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Name'
                required
               />
             <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
               />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
               />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
               />
               <input
                type='radio'
                name='type'
                value='Librarian'
                onChange={this.handleChange}
                required
               /><label>Librarian</label>
               <input
                type='radio'
                name='type'
                value='Member'
                onChange={this.handleChange}
                required
               /><label>Member</label>

               
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

}
export default SignUp;

