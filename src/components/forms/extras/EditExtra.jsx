function EditExtra(props) {
    return (
  
        <form
          action=""
          className=""
          noValidate
          autoComplete="off"
          onSubmit={props.editExtra.handleSubmit}
        >
          <label htmlFor="name">שם חברה:</label>
          <input
            type="text"
            label="name"
            placeholder="name"
            className="inputEmp"
            name="name"
            values={props.editExtra.values.name}
            value={props.editExtra.values.name}
            onChange={props.editExtra.handleChange}
          />
          <label htmlFor="cat">שם הסוכן:</label>
          <input
            type="text"
            label="description"
            placeholder="agent name"
            className="inputEmp"
            name="agentname"
            values={props.editExtra.values.agentname}
            value={props.editExtra.values.agentname}
            onChange={props.editExtra.handleChange}
          />
  
          <label htmlFor="address">כתובת:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.editExtra.values.address}
            value={props.editExtra.values.address}
            onChange={props.editExtra.handleChange}
            name="address"
            id="address"
          />
  
          <label htmlFor="cat"> טלפון</label>
          <input
            type="number"
            className="inputEmp"
            values={props.editExtra.values.phone}
            value={props.editExtra.values.phone}
            onChange={props.editExtra.handleChange}
            name="phone"
            id="phone"
          />
          <label htmlFor="address">אימייל:</label>
  
          <input
            type="email"
            className="inputEmp"
            values={props.editExtra.values.email}
            value={props.editExtra.values.email}
            onChange={props.editExtra.handleChange}
            name="email"
            id="email"
          />
  
          <label htmlFor="address">מיקוד:</label>
  
          <input
            type="number"
            className="inputEmp"
            values={props.editExtra.values.zipcode}
            value={props.editExtra.values.zipcode}
            onChange={props.editExtra.handleChange}
            name="zipcode"
            id="zipcode"
          />
  
          <label htmlFor="address">קטגוריה:</label>
  
          <input
            type="text"
            className="inputEmp"
            values={props.editExtra.values.cat}
            value={props.editExtra.values.cat}
            onChange={props.editExtra.handleChange}
            name="cat"
            id="cat"
          />
                  <label htmlFor="address">יום הזמנה:</label>
  
           <input
            type="text"
            className="inputEmp"
            values={props.editExtra.values.day}
            value={props.editExtra.values.day}
            onChange={props.editExtra.handleChange}
            name="day"
            id="day"
          />
          <br />
  
          <button className="btn" type="submit">
            send
          </button>
        </form>
    
    );
  }
  
  export default EditExtra;
  