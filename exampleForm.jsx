import { counterStore } from './store/stores'

function Form() {
  const [form, setForm, { onInputChange, submit}] = formStore();

  const onChange = (e) => onInputChange(form, setForm, e);

  return (
    <div className="App">
        <form onSubmit={(e)=> submit(e, user)}>
            <label htmlFor="name">
                Name:
                <input onChange={onChange} type="text" name="name" id="name" />
            </label>    
            <label htmlFor="email">
                Email:
                <input onChange={onChange} type="email" name="email" id="email" />
            </label> 
            <label htmlFor="email">
                Password:
                <input onChange={onChange} type="password" name="password" id="password" />
            </label>    
            <button type="submit"> Submit </button>
        </form>      
    </div>
  )
}

export default Form;