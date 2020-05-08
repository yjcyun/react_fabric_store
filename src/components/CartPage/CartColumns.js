import React from 'react'

const CartColumns = () => {
  return (
    <div className="container d-none d-lg-block mt-5">
      <div className="row">
        {/* single column */}
        <div className="col-lg-6">
          <p className="text-uppercase pb-0">item</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of single column */}
        {/* single column */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of single column */}
      </div>
    </div>
  )
}

export default CartColumns
