import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    productImage: {
        width: '250px',
        height: '300px'
    },
    productList:{
        width: '50px',
        wordBreak: 'break-all',
        paddingBottom: '5%'
    },
    title:{
        padding: '10px 10px 0 10px',
        height: '16%',
        fontWeight: 'bold !important'
    },
    numberOfItem:{
        display: 'flex',
        padding: '10px'
    },
    input:{
        width: '30px',
        height: '25px',
        padding: '5px'
    },
    placeOrder:{
        marginTop: '5px !important',
        backgroundColor: '#005d83 !important',
        color: '#ffffff !important',
        cursor: 'pointer !important'
    },
    appBar:{
        backgroundColor: '#005d83 !important'
    },
    container:{
        marginTop: '5%'
    },
    containerPlaceOrder:{
        marginTop: '3%'
    },
})
