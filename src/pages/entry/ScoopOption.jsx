import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ScoopOptions({ name, imagePath, updateItemCount }) {
  const [inputCheck, setInputCheck] = useState(true);

  const handleChange = (event) => {
    if (parseInt(event.target.value) < 0) {
      setInputCheck(false);
      updateItemCount(name, 0);
    } else if (isNaN(parseInt(event.target.value))) {
      updateItemCount(name, 0);
    } else updateItemCount(name, event.target.value);
  };

  const customId = 'custom-id-yes';

  useEffect(() => {
    if (!inputCheck) {
      toast('You cannot enter a negative value', {
        toastId: customId,
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        type: 'info',
        progress: undefined,
        limit: 1
      });
    }
  }, [inputCheck]);

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        {!inputCheck && (
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
            min="0"
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
