import React from 'react'

const LoadingComponent = () => {
    return (
        <>
            <div className="col">
                <div className="card" aria-hidden="true">
                    <img src="..." className="card-img-top rounded" alt="..." style={{width:"22.25rem", height:"14.75rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>              
                        </p>
                        <button className="btn btn-sm btn-primary disabled placeholder col-2" aria-disabled="true"></button>
                    </div>
                </div>  
            </div>            
        </>
    )
}

const Loading = () => {
  return (
    <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <LoadingComponent /> 
            <LoadingComponent /> 
            <LoadingComponent /> 
        </div>
    </>
  )
}

export default Loading