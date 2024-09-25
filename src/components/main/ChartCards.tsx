import { Box, Card } from '@mui/material';
import { chartsItems } from '../../libs/options';
import Grid from '@mui/material/Grid2';
import { BarChart } from '@mui/x-charts/BarChart';

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

              <BarChart
                sx={{ width: '100%', height: '100%', padding: '32px' }}
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChartCards;
