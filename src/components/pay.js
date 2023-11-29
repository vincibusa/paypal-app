import React, { useState, useEffect } from 'react';

const PayPalComponent = () => {
  const [amount, setAmount] = useState('');
  const [succToast, setSuccToast] = useState(false);
  const [failToast, setFailToast] = useState(false);

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

  const handlePayment = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      alert('Inserisci un importo valido!');
      return;
    }
    window.paypal.Buttons({
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount
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
    }).render('#paypal-button-container');
  };

  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
    <div className={`w-1/2 h-fit succToast absolute top-3 flex justify-center items-center ${succToast ? 'block' : 'hidden'}`}>
  <p className='py-2'>Pagamento riuscito</p>
</div>
<div className={`w-1/2 h-fit failToast absolute top-3 flex justify-center items-center ${failToast ? 'block' : 'hidden'}`}>
  <p className='py-2'>Pagamento non riuscito, riprovare</p>
</div>
      <div className='w-2/3 h-5/6 bg-white rounded-[30px] flex justify-center flex-col px-5 md:px-10 py-5 md:py-5 items-center shad'>
        <h1 className='fix-text'>Effettua pagamento con PayPal</h1>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="fix-input px-4 py-2 w-full my-5 md:my-10"
        />
        <button onClick={handlePayment} className='bg-black fix-btn flex justify-center items-center w-full h-[40px]'>
          <h2 className='text-white'>Prosegui</h2>
        </button>
        <div id="paypal-button-container"></div>
      </div>
    </div>
  );
};

export default PayPalComponent;
