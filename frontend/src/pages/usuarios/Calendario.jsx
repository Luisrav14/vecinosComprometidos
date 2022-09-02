import React from 'react'
import '@fullcalendar/react/dist/vdom';
import '@fullcalendar/core/vdom'
import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import Swal from "sweetalert2";

export default class Calendario extends React.Component {
  render() {
    return (
      <FullCalendar
      
      locale={esLocale}
        plugins={[ dayGridPlugin, interactionPlugin  ]}
        dateClick={this.handleDateClick}
        initialView="dayGridMonth"
        events={[
          { title: 'Fiesta de cumpleaños', date: '2022-09-15' },
          { title: 'Fiesta de cumpleaños ', date: '2022-09-09' },
          
        ]}
      />
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Deseas reservar esta fecha?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No, cancela!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '',
          'error'
        )
      }
    })
  }
}

