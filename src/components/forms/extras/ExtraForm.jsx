function ExtraForm(props) {
    return (
  
        <form
          action=""
          className=""
          noValidate
          autoComplete="off"
          onSubmit={props.addExtra.handleSubmit}
        >
          <label htmlFor="name">שם :</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className=""
            name="ename"
            values={props.addExtra.values.ename}
            onChange={props.addExtra.handleChange}
          />
          <label htmlFor="cat"> מחיר:</label>
          <input
            type="number"
            label="description"
            placeholder="ptice"
            className="inputEmp"
            name="eprice"
            values={props.addExtra.values.eprice}
            
            onChange={props.addExtra.handleChange}
          />
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addExtra.values.eimg}
            onChange={props.addExtra.handleChange}
            name="eimg"
            id="eimg"
          />
  
          
        
                  
  
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default ExtraForm;
  