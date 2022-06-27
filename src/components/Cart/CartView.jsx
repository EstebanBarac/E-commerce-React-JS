import React from 'react'


export default function CartView({ item }) {

  return (
    <>
        <div className="card rounded-3 mb-4 bg-dark text-white">
            <div className="card-body p-4">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={item.imgURL1}
                    className="img-fluid rounded-3" alt="Cotton T-shirt" />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                  <p className="lead fw-normal mb-2">{item.nombre}</p>
                  <p><span className="text-muted">{item.category}</span></p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                </div>
                <div style={{width: '90px'}}>
                          <h6 className="mb-0">{item.qty} dias X </h6>
                        </div>  
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h5 className="mb-0"> $ {item.precio} (c/dia)</h5>
                </div>
              </div>
            </div>
          </div>
</>
  )
}