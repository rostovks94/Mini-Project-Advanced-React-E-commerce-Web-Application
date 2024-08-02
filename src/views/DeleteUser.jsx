import React, { useState } from 'react';
import { Container, Button, Alert, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../services/apiService';
import SessionStorageService from '../services/SessionStorageService';
import '../css/DeleteUser.css';

const DeleteUser = () => {
    const user = SessionStorageService.getUser();
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteUser(user.id);
            console.log('Delete successful');

            SessionStorageService.clear();

            setSuccess(true);
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container className="delete-user-container">
            <h1 className="mb-3">Delete Account</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Account deleted successfully! Redirecting...</Alert>}
            <Button variant="danger" onClick={() => setShowModal(true)}>
                Delete Account
            </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default DeleteUser;