import React from 'react'

const Tray = () => {
  return (
    <div className='calculatorCard w-8/10 h-9/10 rounded-2xl  shadow-300'>
        <div className="title">
            <h3 className='text-3xl text-center'>Tray Calculator</h3>
        </div>
        <div className="inputSection flex justify-center ">
            <div className="context flex flex-col gap-4 w-9/10 ">
                <div className="inputBox">
                    <label className='text-xl'>Expected Yield (Grams per Tray)</label><br />
                    <input className='w-7/10 h-10 ' type="text" placeholder='in Grams' />
                </div>
                <div className="inputBox">
                     <label className='text-xl'>Amount Needed</label><br />
                    <input className='w-7/10 h-10 ' type="text" placeholder='in Grams' />
                </div>
                <div className="inputBox">
                     <label className='text-xl'>Safety Margin (Optional)</label><br />
                    <input className='w-7/10  h-10' type="text" placeholder='Enter the number of trays' />
                </div>
                <div className="inputBox">
                     <label className='text-xl'>Sow Density (Grams per Tray)</label><br />
                    <input className='w-7/10  h-10' type="text" placeholder='in Grams' />
                </div>
                <div className="resultList">
                    <div>
                        <h3>Trays Needed :</h3>
                    </div>
                    <div>
                        <h3>Trays For Safety Margin :</h3>
                    </div>
                    <div>
                        <h3>Total Trays :</h3>
                    </div>
                    <div>
                        <h3>Amount Needed :</h3>
                    </div>
                    <div>
                        <h3>Safety Margin Amount :</h3>
                    </div>
                    <div>
                        <h3>Total Amount :</h3>
                    </div>
                    <div>
                        <h3>Seeds Amount :</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tray