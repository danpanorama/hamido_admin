function AddServwayForm(props) {
    return (
  
        <form
          action=""
          className=""
          noValidate
          autoComplete="off"
          onSubmit={props.addServWay.handleSubmit}
        >
          <label htmlFor="name">שם :</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className=""
            name="sername"
            values={props.addServWay.values.sername}
            onChange={props.addServWay.handleChange}
          />
          <label htmlFor="cat"> מחיר:</label>
          <input
            type="number"
            label="description"
            placeholder="serptice"
            className="inputEmp"
            name="serprice"
            values={props.addServWay.values.serprice}
            
            onChange={props.addServWay.handleChange}
          />
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addServWay.values.serimg}
            onChange={props.addServWay.handleChange}
            name="serimg"
            id="serimg"
          />
  
          
        
                  
  
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default AddServwayForm;
  