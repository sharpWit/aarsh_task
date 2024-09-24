import { Box, Card } from '@mui/material';
import { chartsItems } from '../../libs/options';
import Grid from '@mui/material/Grid2';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const ChartCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {chartsItems.map((card) => (
          <Grid key={card.id} size={4}>
            <Card
              sx={{
                // height: '100%',
                // width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '.2em solid hsla(0, 0%, 0%, 0.05) '
              }}
            >
              <h3>{card.title}</h3>
              <p>{card.disc}</p>

              <div style={{ width: '90%', height: '100%' }}>
                <Gauge
                  value={72}
                  startAngle={-90}
                  endAngle={90}
                  sx={{
                    width: '100%',
                    height: '100%',
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                      transform: 'translate(0px, 0px)'
                    }
                  }}
                  text={({ value }) => `${value} %`}
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
