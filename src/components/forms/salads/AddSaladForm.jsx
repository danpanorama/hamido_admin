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
            placeholder="name"
            className=""
            name="name"
            values={props.addSalad.values.name}
            onChange={props.addSalad.handleChange}
          />
        
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addSalad.values.img}
            onChange={props.addSalad.handleChange}
            name="img"
            id="img"
          />
  
          
        
                  
  
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default AddSaladForm;
  