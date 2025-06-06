import React, { useState } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Typography
} from '@mui/material';

const ConfirmSwitchModal = ({ open, onClose, onConfirm }) => {
    const [step, setStep] = useState(1);

    const handleNext = async () => {
        if (step === 1) {
            setStep(2);
        } else {
            if (onConfirm) await onConfirm(); // await 안전 호출
            handleClose();
        }
    };

    const handleClose = () => {
        setStep(1);
        if (onClose) onClose(); // 예외 방지용
    };

    const message = step === 1
        ? '정말 하시겠습니까?'
        : '문제 발생 시 책임은 본인에게 있습니다.';

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>스위치 제어 확인</DialogTitle>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    취소
                </Button>
                <Button onClick={handleNext} color="primary">
                    예
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmSwitchModal;