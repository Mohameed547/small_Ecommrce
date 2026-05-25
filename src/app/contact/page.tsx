'use client'

import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Paper
} from '@mui/material'

export default function ContactPage() {

  return (

    <Container maxWidth="sm" sx={{ mt: 8 }}>

      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: 4
        }}
      >

        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 4
          }}
        >
          Contact Us
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >

          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Phone"
            type="tel"
            variant="outlined"
            fullWidth
          />

          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
          >
            Send Message
          </Button>

        </Box>

      </Paper>

    </Container>
  )
}