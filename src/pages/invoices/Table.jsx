import React from 'react'
import { mainLayoutAuth } from '../../layout'
import { TableComponent } from '../../components/customComponents'

const Table = () => {

    const fields = [
        {
            key: '1',
            label: 'Invoice ID',
           
        },
       
        {
            key: '2',
            label: 'Created on',
           
        },
        {
            key: '3',
            label: 'Invoice to',
           
        },
        {
            key: '4',
            label: 'Amount',
           
        },
        {
            key: '5',
            label: 'Due dategg',
           
        },
        {
            key: '6',
            label: 'Status',
           
        },
        {
            key: 'ACTION',
            label: 'ACTION',
           
        },
    ]

    const items = [
        {
         
            1: 'IN093439#@09',
            2: 'Advertising',
            3: '16 Mar 2022',
            4: 'Barbara Moore',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Paid',
           
        },
        {
         
            1: 'IN093439#@09',
            2: 'Advertising',
            3: '16 Mar 2022',
            4: 'Barbara Moore',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Paid',
           
        },
        {
         
            1: 'IN093439#@08',
            2: 'mugutha',
            3: '16 Mar 8922',
            4: 'Barbara More',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Not Paid',
           
        },
        {
         
            1: 'IN093439#@01',
            2: 'marketing',
            3: '16 Mar 1209',
            4: 'Barbara monica',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Paid',
           
        },
        {
         
            1: 'IN093439#@02',
            2: 'mugutha',
            3: '16 Mar 8922',
            4: 'Barbara More',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Paid',
           
        },
        {
         
            1: 'IN093439#@03',
            2: 'juja',
            3: '16 Mar 1288',
            4: 'Barbara mimi',
            5: '$1,54,567',
            6: '23 Mar 2022',
            7: 'Not Paid',
           
        },
        {
         
            1: 'IN093439#@04',
            2: 'mugutha',
            3: '16 Mar 8922',
            4: 'Barbara More',
            5: '$1,54,220',
            6: '23 Mar 2022',
            7: 'Paid',
           
        },
        {
         
            1: 'IN093439#@05',
            2: 'maumau',
            3: '16 Mar 1289',
            4: 'Barbara mimi',
            5: '$1,54,899',
            6: '23 Mar 2022',
            7: 'Not Paid',
           
        },
    ]

  return (

    <div class="row">
            <div class="col-sm-12">
              <div class="card card-table">
                <div class="card-body">
                  <div class="table-responsive">
                  <TableComponent
  fields={fields}
  items={items}
  scopedSlots={{
    ACTION: (item) => (
      <td className="text-end">
        <div className="dropdown dropdown-action">
          <a
            href="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="edit-invoice.html">
              <i className="far fa-edit me-2"></i>Edit
            </a>
            <a className="dropdown-item" href="view-invoice.html">
              <i className="far fa-eye me-2"></i>View
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              <i className="far fa-trash-alt me-2"></i>Delete
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              <i className="far fa-check-circle me-2"></i>Mark as sent
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              <i className="far fa-paper-plane me-2"></i>Send Invoice
            </a>
            <a className="dropdown-item" href="javascript:void(0);">
              <i className="far fa-copy me-2"></i>Clone Invoice
            </a>
          </div>
        </div>
      </td>
    ),
  }}
/>

                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default mainLayoutAuth(Table)