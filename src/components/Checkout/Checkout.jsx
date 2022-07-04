import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';


export default function Checkout() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');
    const { cart, getItemPrice } = useContext(CartContext);
    
    const db = getFirestore();
    const pedidoCollection = collection(db, 'pedidos');
  
    function handleForm(e) {
		e.preventDefault();

		const order = {
			buyer: { name, email, phone },
			items: cart,
			total: getItemPrice(),
		};

		if (!name || !email || !phone) {
			return toast.warn('No puede dejar campos vacios', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
		} else if (
			name.length < 3 ||
			name.length > 15 ||
			!/^[a-zA-Z]+$/.test(name)
		) {
			return toast.warn('Ingrese datos validos', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
		}

		addDoc(pedidoCollection, order).then(({ id }) => {
			setOrderId(id);
			toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
		});
		console.log(order, orderId);
	}

	return (
		<>
        <ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>

			{!orderId ? (
				<div className='formCheckout'>
					<div>
						<h5 className='text-center text-white'>
							Para dar seguimiento a su compra, por favor, ingresar los datos
							abajo:
						</h5>
					</div>
					<div className='formulario container d-flex justify-content-center align-items-center pt-5'>
						<form>
							<div className='mb-1'>
								<label className='form-label text-white'>Nombre</label>
								<input
									onChange={(e) => setName(e.target.value)}
									placeholder='Ingrese su nombre'
									type='name'
									className='form-control'
								/>
							</div>
							<div className='mb-1'>
								<label className='form-label text-white'>Telefono</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									placeholder='Ingrese su telefono'
									type='phone'
									className='form-control'
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label text-white'>Email</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Ingrese su email'
									type='email'
									className='form-control'
								/>
							</div>
							<div className='pb-4'>
								<button
									onClick={handleForm}
									type='submit'
									className='btn btn-warning px-3 mx-2'>
									Enviar Pedido
								</button>
								<Link to='/cart'><button className='btn btn-dark text-warning px-3 mx-2'>
									Volver al carrito
								</button></Link>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div
					className='container d-flex justify-content-start pt-5 flex-column align-items-center gracias-compra' id='orderForm'>
					<h2 className='text-warning'>Muchas gracias por su compra!!</h2>
					<p>ID de pedido: {orderId}</p>
					<Link to='/'>
						<button className='btn radius-50 bg-warning m-3'>
							Volver a Inicio
						</button>
					</Link>
				</div>
			)}
		</>
	);
}
