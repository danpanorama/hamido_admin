function AddSaladForm(props) {
    return (
  
        <form
          action=""
          className=""
          noValidate
          autoComplete="off"
          onSubmit={props.addSalad.handleSubmit}
        >
          <label htmlFor="name">שם :</label>
          <input
            type="text"
            label="name"
            placeholder="sname"
            className=""
            name="sname"
            values={props.addSalad.values.sname}
            onChange={props.addSalad.handleChange}
          />
        
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addSalad.values.simg}
            onChange={props.addSalad.handleChange}
            name="simg"
            id="simg"
          />
  
          
        
                  
  
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default AddSaladForm;
  