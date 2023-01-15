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
            name="name"
            values={props.addServWay.values.name}
            onChange={props.addServWay.handleChange}
          />
          <label htmlFor="cat"> מחיר:</label>
          <input
            type="number"
            label="description"
            placeholder="ptice"
            className="inputEmp"
            name="price"
            values={props.addServWay.values.price}
            
            onChange={props.addServWay.handleChange}
          />
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addServWay.values.img}
            onChange={props.addServWay.handleChange}
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
  
  export default AddServwayForm;
  