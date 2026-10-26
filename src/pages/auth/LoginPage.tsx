import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
  email: '',
  password: ''
}); 

  const [entryState, setEntryState] = useState<'login' | 'register'>('login');

  return (<>
  <h1>Emergency Blood & Medicine Locator</h1>
     <form onSubmit={(e) => {
        // e.preventDefault();
      if (entryState === 'register') {
          // Handle registration logic here
       }
    }}>
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          required 
        />
      </label>
      <br />
      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          required 
        />
      </label>
       <br />
      {entryState === 'register' && (
        <label>
          Register as :
          <select id="role" name="role">
            <option value="">Select a role</option>
            <option value="donor">Donor</option>
            <option value="patient">Patient</option>
          </select>
        </label>
      )}

      {entryState === 'login' && <button type="submit">Login</button>}
      {entryState === 'register' && <button type="submit">Register</button>}
      {entryState === 'login' && <p> <button onClick={() => setEntryState('register')}>New User  - Register</button></p>}
    </form> 
  </>);
};

export default LoginPage