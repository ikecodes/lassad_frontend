import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteUser,
  confirmPayment,
  cancelPayment,
} from '../../store/actions/admin';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const User = ({
  id,
  name,
  email,
  password,
  phone,
  referer,
  deposit,
  request,
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <div className='users__box'>
      <h2 className='users__name'>{name}</h2>
      <h2 className='users__detail'>
        <span className='users__label'>Email:</span>
        <span className='users__text'>{email}</span>
      </h2>
      <h2 className='users__detail'>
        <span className='users__label'>Password:</span>
        <span className='users__text'>{password}</span>
      </h2>
      <h2 className='users__detail'>
        <span className='users__label'>Phone:</span>
        <span className='users__text'>{phone}</span>
      </h2>
      <h2 className='users__detail'>
        <span className='users__label'>Referer:</span>
        <span className='users__text'>{referer}</span>
      </h2>
      {request === 'Yes' && (
        <div className='users__deposit-request'>
          <div style={{ textAlign: 'center' }}>
            <p>
              {name} wants to deposit ${deposit}.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <button
              className='btn-payment btn-payment-confirm'
              onClick={() => dispatch(confirmPayment({ _id: id }))}
            >
              Confirm
            </button>
            <button
              className='btn-payment btn-payment-cancel'
              onClick={() => dispatch(cancelPayment({ _id: id }))}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '2rem',
        }}
      >
        <Link to={`/editUser?email=${email}`}>
          <FaEdit size={20} color='green' />
        </Link>

        {user?.email === email ? null : (
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(deleteUser({ _id: id }))}
          >
            <FaTrash size={20} color='red' />
          </span>
        )}
      </div>
    </div>
  );
};

export default User;
