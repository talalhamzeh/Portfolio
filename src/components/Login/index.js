

import { signInWithGoogle } from '../../firebase';
import './login.scss'
const Login = () => {
    return (
        <div className="dashboard">
            <button onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </div>
    )
}

export default Login;