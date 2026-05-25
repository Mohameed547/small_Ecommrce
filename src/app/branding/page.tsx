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

export default function BrandsPage() {

  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(true)

  async function getBrands() {

    try {

      const { data } = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/brands'
      )

      setBrands(data.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    getBrands()
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
        Brands
      </Typography>

      <Grid container spacing={4}>

        {brands.map((brand) => (

          <Grid
            key={brand._id}
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
                image={brand.image}
                alt={brand.name}
              />

              <CardContent>

                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center'
                  }}
                >
                  {brand.name}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Container>
  )
}