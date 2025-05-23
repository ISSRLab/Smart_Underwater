import React, { useMemo, useState } from 'react';
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/components/WellTable.module.css';

const alertSampleData = [
    {
        id: 1,
        category: '관정A',
        title: '수위 이상 발생',
        content: '현재 수위가 설정된 안전 범위를 벗어났습니다.',
        date: '2025-04-29 14:00:00',
    },
    {
        id: 2,
        category: '관정A',
        title: '도어락 열림',
        content: '도어락이 관리자1에 의해 14:03에 정상적으로 열렸습니다.',
        date: '2025-04-29 14:03:00',
    },
    {
        id: 3,
        category: '관정B',
        title: '움직임 감지 발생',
        content: 'CCTV에서 14:10 움직임이 감지되었습니다.',
        date: '2025-04-29 14:10:00',
    },
];

const UserAlertTable = () => {
    const [data] = useState(alertSampleData);
    const navigate = useNavigate();

    const alertList = useMemo(() => data, [data]);

    return (
        <Box className={styles.container}>
            <Typography variant="h5" mb={2}>알림 목록</Typography>
            <TableContainer component={Paper}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>관정명</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>내용</TableCell>
                            <TableCell>날짜</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alertList.map((alert, index) => (
                            <TableRow key={alert.id} hover className={styles.clickableRow}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{alert.category}</TableCell>
                                <TableCell
                                    className={styles.clickable}
                                    onClick={() => navigate(`/users/alerts/detail/${alert.id}`)}
                                    style={{ color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                                >
                                    {alert.title}
                                </TableCell>
                                <TableCell>{alert.content}</TableCell>
                                <TableCell>{alert.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default UserAlertTable;
