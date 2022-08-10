import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Box, Paper, Typography, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { ProductList_Action, Place_Order } from "../redux_store/action/productList_Action";
import { useStyles } from "../css/productStyle";

export default function ProductList(props) {
    const productList = useSelector((state) => state.productListData)
    const dispatch = useDispatch()
    const navigate = useNavigate(); 
    const classes = useStyles()
    const [orderCount, setOrderCount] = useState(1)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      useEffect(()=>{
        dispatch(ProductList_Action('https://fakestoreapi.com/products'))
      }, [])

      const handleInput=(event)=>{
        setOrderCount(event.target.value)
      }

      const placeOrder = (item) =>{
        const data = {
          item: item,
          orderCount: orderCount
        }
          dispatch(Place_Order(data))
          navigate('/placeOrder', {state: data})
      }

  return (
    <Container maxWidth="lg" className={classes.container}>   
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6 }}>
                {productList?.length > 0 && productList?.map((item, index) => (
                <Grid item xs={2} sm={2} md={2} key={index} className={classes.productList}>
                    <Item><img src={item?.image} className={classes.productImage} /></Item>
                    <Typography className={classes.title}>{item?.title}</Typography>
                    <div className={classes.numberOfItem}>
                      <Typography className={classes.title}>Number Of Items: </Typography>
                      <input type="number" 
                        className={classes.input} onChange={handleInput} value={orderCount} />
                    </div>
                    <Typography>{'Price: '}{'$'}{item?.price}</Typography>
                    <Button onClick={()=>placeOrder(item)} className={classes.placeOrder}>Place order</Button>
                </Grid>
            ))}
      </Grid>
    </Box>
    </Container>
  );
}