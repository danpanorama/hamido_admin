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
            name="name"
            values={props.addExtra.values.name}
            onChange={props.addExtra.handleChange}
          />
          <label htmlFor="cat"> מחיר:</label>
          <input
            type="number"
            label="description"
            placeholder="ptice"
            className="inputEmp"
            name="price"
            values={props.addExtra.values.price}
            
            onChange={props.addExtra.handleChange}
          />
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addExtra.values.img}
            onChange={props.addExtra.handleChange}
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
  
  export default ExtraForm;
  