import { Box, Card } from '@mui/material';
import { chartsItems } from '../../libs/options';
import Grid from '@mui/material/Grid2';

const ChartCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {chartsItems.map((card) => (
          <Grid key={card.id} size={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '.2em solid hsla(0, 0%, 0%, 0.05) '
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.disc}</p>
              <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '250px', maxHeight: '240px' }}>
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(110%) brightness(95%)'
                  }}
                />
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChartCards;
