function ProductsForm(props) {
    return (
  
        <form
          action=""
          className=""
          noValidate
          autoComplete="off"
          onSubmit={props.addProducts.handleSubmit}
        >
          <label htmlFor="name">שם :</label>
          <input
            type="text"
            label="name"
            placeholder="pname"
            className=""
            name="pname"
            values={props.addProducts.values.pname}
            onChange={props.addProducts.handleChange}
          />
        
  
          <label htmlFor="address">תמונה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.addProducts.values.pimg}
            onChange={props.addProducts.handleChange}
            name="pimg"
            id="pimg"
          />
  
          
  <label htmlFor="address">מחיר:</label>
  
  <input
    type="text"
    className="inputEmp"
    values={props.addProducts.values.pprice}
    onChange={props.addProducts.handleChange}
    name="pprice"
    id="pprice"
  />
                  
  
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default ProductsForm;
  