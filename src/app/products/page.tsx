'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box
} from '@mui/material'

export default function ProductsPage() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  async function getProducts() {

    try {

      const { data } = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/products'
      )

      setProducts(data.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (loading) {

    return (

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5
        }}
      >
        <CircularProgress />
      </Box>

    )
  }

  return (

    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          mb: 5
        }}
      >
        Products
      </Typography>

      <Grid container spacing={4}>

        {products.map((product) => (

          <Grid
            key={product._id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3
            }}
          >

            <Card sx={{ height: '100%' }}>

              <CardMedia
                component="img"
                height="250"
                image={product.imageCover}
                alt={product.title}
              />

              <CardContent>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    minHeight: 60
                  }}
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {product.description.slice(0, 70)}...
                </Typography>

                <Typography
                  variant="h6"
                  color="success.main"
                >
                  {product.price} 
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1 }}
                >

                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  )
}