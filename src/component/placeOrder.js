import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Box, Paper, Typography, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useStyles } from "../css/productStyle";
import MenuAppBar from "./appBar";

export default function PlaceOrder() {
    const productList = useSelector((state) => state.placeOrder)
    const classes = useStyles()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const orderPrize = (productList?.orderCount > productList.item.rating.count * 10/ 100) ? (productList?.item?.price * 5 / 100) : (productList?.orderCount > productList.item.rating.count * 50/ 100) ? (productList?.item?.price * 10 / 100) : (productList?.orderCount > productList.item.rating.count * 90/ 100) ? (productList?.item?.price * 20 / 100) : productList?.item?.price

      return (
    <>
        <MenuAppBar />
    <Container maxWidth="lg" className={classes.containerPlaceOrder}>   
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 6 }}>
                <Grid item xs={2} sm={2} md={2}>
                    <Item><img src={productList?.item?.image} className={classes.productImage} /></Item>
                    <Typography>{productList?.item?.title}</Typography>
                    <Typography><b>Description: </b> {productList?.item?.description}</Typography>
                    <Typography><b>Category: </b> {productList?.item?.category}</Typography>
                    <Typography><b>Number Of Items: </b> {productList?.orderCount}</Typography>
                    <Typography>{'Price: '}{' '}<b>{'$'}{productList?.item?.price}</b> {' '} <br/> Discount: <del>{' '}{'$'}{orderPrize === productList?.item?.price ? '0': orderPrize}</del></Typography>
                </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  );
}