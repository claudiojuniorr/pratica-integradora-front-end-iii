import React, { useState, useEffect } from 'react';

function PizzaApp() {
  const [pedidoRealizado, setPedidoRealizado] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPedidoRealizado(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    console.log('O componente foi atualizado!');
  });

  const handleCancelarPedido = () => {
    alert('Pedido cancelado');
    setPedidoRealizado(false);
  };

  return (
    <div>
      {pedidoRealizado ? (
        <div>
          <h1>Seu pedido: Pizzas</h1>
          <button onClick={handleCancelarPedido}>Cancelar Pedido</button>
        </div>
      ) : (
        <div>
          <h1>Seu pedido:</h1>
          <button onClick={handleCancelarPedido}>Cancelar Pedido</button>
        </div>
      )}
    </div>
  );
}

export default PizzaApp;
