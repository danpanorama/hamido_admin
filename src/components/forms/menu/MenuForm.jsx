function MenuForm(props) {
  return (
    <form
      action=""
      className=""
      noValidate
      autoComplete="off"
      onSubmit={props.addMenuItemFormik.handleSubmit}
    >
      <div className="flexrow">  
      
      <div className="flexcol">
          <label htmlFor="">צורת הגשה</label>
          <select
            name="servway"
            values={props.addMenuItemFormik.values.servway}
            onInput={props.addMenuItemFormik.handleChange}
            id=""
          >
            {props.servway.map((e) => {
              return <option key={e.serid} value={JSON.stringify({name:e.sername,id:e.serid})}>{e.sername}</option>;
            })}
          </select>
        </div>
      ---------
        <div className="flexcol">
          <label htmlFor="">מנה של</label>

          <select
            name="mname"
            values={props.addMenuItemFormik.values.mname}
            onInput={props.addMenuItemFormik.handleChange}
            id="mname"
          >
            {props.products.map((e) => {
              return <option key={e.pid} value={JSON.stringify({name:e.pname,id:e.pid})}>{e.pname}</option>;
            })}
          </select>
        </div>
      

      </div>

      <label htmlFor="">מחיר למנה</label>

      <input
        type="number"
        placeholder="מחיר"
        id="price"
        name="mprice"
        values={props.addMenuItemFormik.values.mprice}
        onChange={props.addMenuItemFormik.handleChange}
      />

      <label htmlFor="">כמות סלטים</label>
      <input
        type="number"
        name="sumextra"
        id="sumextra"
        values={props.addMenuItemFormik.values.sumextra}
        onChange={props.addMenuItemFormik.handleChange}
      />

      <label htmlFor="">תמונה</label>
      <input
        type="text"
        name="mimg"
        id="mimg"
        values={props.addMenuItemFormik.values.mimg}
        onChange={props.addMenuItemFormik.handleChange}
      />

      <button className="btn" type="submit">
        send
      </button>
    </form>
  );
}

export default MenuForm;
