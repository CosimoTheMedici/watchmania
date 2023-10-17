export function InputRequired({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    divclassName,
    inputReq
   
  }) {
    return (
      <div className={divclassName}>
      <div className="form-group local-forms">
      <label>{{labelText}} {inputReq === true ?<span className="login-danger">*</span>:""}</label>
      <input 
             type={inputType}
             className="form-control" 
             placeholder={placeholder}
             onChange={onChange}
             name={name}
             id={id}
             value={value}
        />
      </div>
      </div>
    );
  }
  
  InputRequired.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };

export function InputDateRequired({
    labelText,
    placeholder,
    inputType,
    onChange,
    value,
    name,
    id,
    divclassName,
    inputReq
   
  }) {
    return (
      <div className={divclassName}>
      <div className="form-group local-forms calendar-icon">
      <label>{{labelText}} {inputReq === true ?<span className="login-danger">*</span>:""}</label>
      <input 
             type={inputType}
             className="form-control datetimepicker" 
             placeholder={placeholder}
             onChange={onChange}
             name={name}
             id={id}
             value={value}
        />
      </div>
      </div>
    );
  }
  
  InputDateRequired.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };
