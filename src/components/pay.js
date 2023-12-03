/* eslint-disable no-lone-blocks */


import React, { useState, useEffect } from 'react';
import immagineA from '../images/immagineA.png'
import immagineB from '../images/immagineB.jpg'
const PayPalComponent = () => {
  const [amount, setAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [succToast, setSuccToast] = useState(false);
  const [failToast, setFailToast] = useState(false);
const [selezione, setSelezione]= useState('')
  const[primoImporto, setPrimoImporto]=useState(false)
  const[secondoImporto, setSecondoImporto]=useState(false)

  const handlePaymentAndAmount = (selectedValue) => {
    setSelectedAmount(selectedValue);
    setAmount(selectedValue);
    handlePayment(selectedValue);

    if (selectedValue === '30.00') {
      setPrimoImporto(true);
    }
    if (selectedValue === '100.00') {
      setSecondoImporto(true);
    }
  };

  useEffect(() => {
    let succTimer, failTimer;
    if (succToast) {
      succTimer = setTimeout(() => {
        setSuccToast(false);
      }, 3000);
    }
    if (failToast) {
      failTimer = setTimeout(() => {
        setFailToast(false);
      }, 3000);
    }

    return () => {
      clearTimeout(succTimer);
      clearTimeout(failTimer);
    };
  }, [succToast, failToast]);

  const handlePayment = (paymentAmount) => {
    if(selezione==='primo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-primo');
  }
      if(selezione==='secondo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-secondo');
  }

  if(selezione==='terzo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-terzo');
  }

  if(selezione==='quarto'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-quarto');
  }

  if(selezione==='quinto'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-quinto');
  }

  if(selezione==='sesto'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-sesto');
  }

  if(selezione==='settimo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-settimo');
  }

  if(selezione==='ottavo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-ottavo');
  }

  if(selezione==='nono'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-nono');
  }

  if(selezione==='decimo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-decimo');
  }

  if(selezione==='undicesimo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-undicesimo');
  }

  if(selezione==='dodicesimo'){

    
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: paymentAmount,
              currency_code: 'EUR' // Imposta la valuta su euro
            }
          }]
        });
      },
      onApprove: function (data, actions) {
        setSuccToast(true);
        console.log('Payment approved:', data);
      },
      onCancel: function (data) {
        setFailToast(true);
        console.log('Payment cancelled:', data);
      }
    }).render('#paypal-button-container-dodicesimo');
  }
 
  };

  useEffect(() => {
    console.log(amount);
  }, [amount]);
  

  return (
    <><div className>
     <div className='flex justify-center '>
  <div className='w-1/2'>
    <img src={immagineA} alt="Descrizione dell'immagine A" />
  </div>
</div>
<div className='flex justify-center mt-5 md:mt-10'>
  <div className='w-2/3'>
    <img src={immagineB} alt="Descrizione dell'immagine A" />
  </div>
</div>
<div className=''>
  <div className=' flex justify-center'>
  <p Paga className='text-black font-inter text-2xl font-normal'>Paga con paypal in 3 rate senza interessi</p>
  </div>
  <div className=' flex justify-center mt-5 md:mt-10'>
  <p Paga className='text-black font-inter text-l font-normal'>Clicca l'importo da pagare  e segui la procedura </p>
  </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* primo banner */}
          <div className="mx-5 mt-10">
            <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 30€  </p><p className='text-black font-inter text-xl font-normal'>(quota associativa)</p></div>
              <div className='mt-5 w-full h-full'>
                <button onClick={() => setSelezione('primo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
            
               <div className={`mt-5 w-full h-full ${selezione==='primo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('30.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Prosegui</button>
              </div>

              <div className={`mt-[10px] ${primoImporto ? 'block' : 'hidden'}`}>
              <div id="paypal-button-container-primo"></div>
              </div>
            </div>
          </div>
           {/* secondo banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 100€ </p></div>
               <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('secondo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='secondo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('100.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className={`mt-[10px] ${secondoImporto ? 'block' : 'hidden'}`}>
              <div id="paypal-button-container-secondo"></div>
              </div>
            </div>
          </div>
           {/* terzo banner */}
          <div className="mx-5 mt-10 ">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 200€ </p></div>
              <div className='mt-5 w-full'>
                <button onClick={() => setSelezione('terzo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 h-full ${selezione==='terzo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('200.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-terzo"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* quarto banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 200€  </p></div>
              <div className='mt-5 w-full h-full'>
                <button onClick={() => setSelezione('quarto')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='quarto' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('200.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-quarto"></div>
              </div>
            </div>
          </div>
           {/* quinto banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 220€ </p></div>
              <div className='mt-5 w-full h-full'>
                <button onClick={() => setSelezione('quinto')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='quinto' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('220.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-quinto"></div>
              </div>
            </div>
          </div>
           {/* sesto banner */}
          <div className="mx-5 mt-10 ">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 250€ </p></div>
              <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('sesto')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full  ${selezione==='sesto' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('250.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-sesto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* settimo banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 300€  </p></div>
              <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('settimo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='settimo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('300.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-settimo"></div>
              </div>
            </div>
          </div>
           {/* ottavo banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 330€ </p></div>
              <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('ottavo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='ottavo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('330.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-ottavo"></div>
              </div>
            </div>
          </div>
           {/* nono banner */}
          <div className="mx-5 mt-10 ">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 400€ </p></div>
              <div className='mt-5 w-full h-full'>
                <button onClick={() => setSelezione('nono')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='nono' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('4000.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-nono"></div>
              </div>
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* decimo banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 500€  </p></div>
              <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('decimo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='decimo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('500.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-decimo"></div>
              </div>
            </div>
          </div>
           {/* undicesimo banner */}
          <div className="mx-5 mt-10">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 600€ </p></div>
              <div className='mt-5 w-full h-full '>
                <button onClick={() => setSelezione('undicesimo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='undicesimo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('6000.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-undicesimo"></div>
              </div>
            </div>
          </div>
           {/* dodicesimo banner */}
          <div className="mx-5 mt-10 ">
          <div className=' rounded-lg bg-white shadow-md flex flex-col items-center justify-center px-5 py-5 '>
              <div><p className='text-black font-inter text-3xl font-normal'>Paga 700€ </p></div>
              <div className='mt-5 w-full h-full'>
                <button onClick={() => setSelezione('dodicesimo')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
          
              <div className={`mt-5 w-full h-full ${selezione==='dodicesimo' ? 'block' : 'hidden'}`}>
                <button onClick={() => handlePaymentAndAmount('700.00')} className='rounded-3xl bg-indigo-900 shadow-md w-full'>Paga</button>
              </div>
              <div className='mt-[10px]'>
              <div id="paypal-button-container-dodicesimo"></div>
              </div>
            </div>
          
          </div>
      <div className='w-full h-full mt-5 md:mt-10'>
        <div className='grid items-center justify-center'>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Inserisci importo"
          className="fix-input px-4 py-2 w-full my-5 md:my-10"
        />
        <button onClick={handlePayment} className='bg-black fix-btn flex justify-center items-center w-full h-[40px]'>
          <h2 className='text-white'>Prosegui</h2>
        </button>
        </div>
      </div>
        </div>
        <div id="paypal-button-container"></div>
      </div></>
  );
};

export default PayPalComponent;


{/* <input
type="text"
value={amount}
onChange={(e) => setAmount(e.target.value)}
placeholder="Inserisci importo"
className="fix-input px-4 py-2 w-full my-5 md:my-10"
/>
<button onClick={() => handlePayment(amount)} className='bg-black fix-btn flex justify-center items-center w-full h-[40px]'>Prosegui</button> */}


 // <div className='w-screen h-screen bg-black flex justify-center items-center'>
    //       <div className={`w-1/2 h-fit succToast absolute top-3 flex justify-center items-center ${succToast ? 'block' : 'hidden'}`}>
    //     <p className='py-2'>Pagamento riuscito</p>
    //   </div>
    //   <div className={`w-1/2 h-fit failToast absolute top-3 flex justify-center items-center ${failToast ? 'block' : 'hidden'}`}>
    //     <p className='py-2'>Pagamento non riuscito, riprovare</p>
    //   </div>
    //   <div className='w-2/3 h-5/6 bg-white rounded-[30px] flex justify-center flex-col px-5 md:px-10 py-5 md:py-5 items-center shad'>
    //     <h1 className='fix-text'>Effettua pagamento con PayPal</h1>
    //     <div className="flex justify-between items-center w-full my-5 md:my-10">
    //       <button onClick={() => setSelectedAmount('10.00')} className='bg-black fix-btn flex justify-center items-center w-[80px] h-[40px]'>
    //         <h2 className='text-white'>$10</h2>
    //       </button>
    //       <button onClick={() => setSelectedAmount('20.00')} className='bg-black fix-btn flex justify-center items-center w-[80px] h-[40px]'>
    //         <h2 className='text-white'>$20</h2>
    //       </button>
    //       {/* Aggiungi altri pulsanti per altri importi fissi se necessario */}
    //     </div>
    //     <input
    //       type="text"
    //       value={amount}
    //       onChange={(e) => setAmount(e.target.value)}
    //       placeholder="Inserisci importo"
    //       className="fix-input px-4 py-2 w-full my-5 md:my-10"
    //     />
    //     <button onClick={handlePayment} className='bg-black fix-btn flex justify-center items-center w-full h-[40px]'>
    //       <h2 className='text-white'>Prosegui</h2>
    //     </button>
    //     <div id="paypal-button-container"></div>
    //   </div>
    // </div>