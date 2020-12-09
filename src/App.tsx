/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { ThemeProvider, jsx, Container, Card, Button, Heading } from 'theme-ui';
import deepTheme from './theme';

function App() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider theme={deepTheme}>
      <Container
        p={4}
        bg="muted"
        sx={{
          height: '100vh',
        }}
      >
        <Card
          sx={{
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '1rem',
            p: 3,
          }}
        >
          <Heading sx={{ marginBottom: 4 }}>Simple counter</Heading>
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            +1
          </Button>
          <p>
            <code>{count}</code>
          </p>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
