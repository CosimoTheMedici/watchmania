export function SelectRequired({
    labelText,
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
    id,
    divclassName,
    inputReq
  }) {
    return (
      <div class={divclassName}>
      <div class="form-group local-forms">
      <label>{{labelText}} {inputReq === true ?<span className="login-danger">*</span>:""}</label>
      <select
          id={id}
          name={name}
          type="select"
          onChange={onChange}
          value={value}
          className="form-control select"
        >
          <option>
            {defaultSelectText
              ? `---------${defaultSelectText}--------`
              : "----------Select---------"}
          </option>
          {arrayData.map((data, index) => (
            <option key={index} value={data.value || data.label}>
              {data.label}
            </option>
          ))}
        </select>
      </div>

      </div>

    );
  }
  
  SelectRequired.propTypes = {
    labelText: PropTypes.string,
    defaultSelectText: PropTypes.string,
    arrayData: PropTypes.array.isRequired,
  };

