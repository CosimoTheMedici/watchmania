import React, { useState } from 'react';

const TableComponent = ({ fields, items, scopedSlots }) => {
  const [searchValues, setSearchValues] = useState({});

  const handleInputChange1 = (event) => {
    const { value } = event.target;
    console.log("value",global)
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      global: value,
    }));
  };
  

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [key]: value,
    }));
  };

//   const filterItems = () => {
//     return items.filter((item) => {
//       for (const key in searchValues) {
//         if (item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
//           return true;
//         }
//       }
//       return false;
//     });
//   };

const filterItems = () => {
    return items.filter((item) => {
      const searchValue = searchValues.global?.toLowerCase() || '';
      for (const key in item) {
        if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchValue)) {
          return true;
        }
      }
      return false;
    });
  };
  

  const filteredItems = filterItems();

  return (
    <>
    <div class="page-header">
<div class="row align-items-center">
<div class="col">
<h3 class="page-title">Subjects</h3>
<ul class="breadcrumb">
<li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
<li class="breadcrumb-item active">Subjects</li>
</ul>
</div>
</div>
</div>

<div className="row">
        <div className="col-auto">
          <div className="page-title">
            {/* <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(event) => handleInputChange1(event, 'global')}
            /> */}
          </div>
        </div>
        <div className="col-auto text-end float-end ms-auto download-grp">
          <a href="#" className="btn btn-outline-primary me-2">
            <i className="fas fa-download"></i> Download
          </a>
          <a href="add-subject.html" className="btn btn-primary">
            <i className="fas fa-plus"></i>
          </a>
        </div>
      </div>
    
    <table className="table table-stripped table-hover datatable">
  <thead className="thead-light">

 
  {/* <div class="col-auto text-end float-end ms-auto download-grp">
        <input
              type="text"
              className="form-control"
              placeholder={`Search ... `}
              //value={searchValues[field.key] || ''}
              //onChange={(event) => handleInputChange(event, field.key)}
            />
    </div> */}
    <tr>
      {fields.map((field) => (
        <th key={field.key} style={field._style}>
          {field.label}
        </th>
      ))}
    </tr>
    <tr>
      {fields.map((field) => (
        <th key={field.key} style={field._style}>
          {field.label !== 'ACTION' ? (
            <input
              type="text"
              className="form-control"
              placeholder={`Search ${field.label}`}
              value={searchValues[field.key] || ''}
              onChange={(event) => handleInputChange(event, field.key)}
            />
          ) : (
            ''
          )}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {items
      .filter((item) => {
        for (const key in searchValues) {
          if (!item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
            return false;
          }
        }
        return true;
      })
      .map((item, index) => (
        <tr key={index}>
          {fields.map((field) => (
            <td key={field.key}>
              {field.key !== 'ACTION' ? (
                item[field.key]
              ) : (
                <>{scopedSlots.ACTION(item)}</>
              )}
            </td>
          ))}
        </tr>
      ))}
  </tbody>
</table>
</>
   
  );
};

export default TableComponent;



// const TableComponent = ({ fields, items, scopedSlots }) => {
//     return (
//       <table className="table table-stripped table-hover datatable">
//         <thead className="thead-light">
//           <tr>
//             {fields.map((field) => (
//               <th key={field.key} style={field._style}>
//                 {field.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               {fields.map((field) => (
//                 <td key={field.key}>
//                   {field.key !== 'ACTION' ? (
//                     item[field.key]
//                   ) : (
//                     <>{scopedSlots.ACTION(item)}</>
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };
  
//   export default TableComponent;
  

{/* <table className="table table-stripped table-hover datatable">
<thead className="thead-light">
<tr>
       {fields.map((field) => (
        <th key={field.key} style={field._style}>
          {field.label}
        </th>
      ))}
    </tr>
    
</thead>
<tbody>
<tr>
    {fields.map((field) => (
      <th key={field.key} style={field._style}>
        {field.label !== 'ACTION' ? (
          <input
            type="text"
            className="form-control"
            placeholder={`Search ${field.label}`}
            value={searchValues[field.key] || ''}
            onChange={(event) => handleInputChange(event, field.key)}
          />
        ) : (
         ""
        )}
      </th>
    ))}
  </tr>
  {filteredItems.map((item, index) => (
    <tr key={index}>
      {fields.map((field) => (
        <td key={field.key}>
          {field.key !== 'ACTION' ? (
            item[field.key]
          ) : (
            <>{scopedSlots.ACTION(item)}</>
          )}
        </td>
      ))}
    </tr>
  ))}

</tbody>
</table> */}


// import React, { useState } from 'react';

// const TableComponent = ({ fields, items, scopedSlots }) => {
//   const [searchValues, setSearchValues] = useState({});

//   const handleInputChange = (event, key) => {
//     const { value } = event.target;
//     setSearchValues((prevSearchValues) => ({
//       ...prevSearchValues,
//       [key]: value,
//     }));
//   };

//   const filterItems = () => {
//     return items.filter((item) => {
//       for (const key in searchValues) {
//         if (item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
//           return true;
//         }
//       }
//       return false;
//     });
//   };

//   const filteredItems = filterItems();

//   return (
//     <>
//       <div className="row">
//         <div className="col-auto">
//           <div className="page-title">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search..."
//               onChange={(event) => handleInputChange(event, 'global')}
//             />
//           </div>
//         </div>
//         <div className="col-auto text-end float-end ms-auto download-grp">
//           <a href="#" className="btn btn-outline-primary me-2">
//             <i className="fas fa-download"></i> Download
//           </a>
//           <a href="add-subject.html" className="btn btn-primary">
//             <i className="fas fa-plus"></i>
//           </a>
//         </div>
//       </div>

//       <table className="table table-stripped table-hover datatable">
//         <thead className="thead-light">
//           <tr>
//             {fields.map((field) => (
//               <th key={field.key} style={field._style}>
//                 {field.label}
//               </th>
//             ))}
//           </tr>
//           <tr>
//             {fields.map((field) => (
//               <th key={field.key} style={field._style}>
//                 {field.label !== 'ACTION' ? (
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder={`Search ${field.label}`}
//                     value={searchValues[field.key] || ''}
//                     onChange={(event) => handleInputChange(event, field.key)}
//                   />
//                 ) : (
//                   ''
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredItems.map((item, index) => (
//             <tr key={index}>
//               {fields.map((field) => (
//                 <td key={field.key}>
//                   {field.key !== 'ACTION' ? (
//                     item[field.key]
//                   ) : (
//                     <>{scopedSlots.ACTION(item)}</>
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default TableComponent;

