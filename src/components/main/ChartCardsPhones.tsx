import { Card } from '@mui/material';
import { chartsItems } from '../../libs/options';
import Grid from '@mui/material/Grid2';
import styles from './ChartCards.module.scss';
import { BarChart } from '@mui/x-charts/BarChart';

const ChartCardsPhones = () => {
  return (
    <div className={styles.wrapperCharts}>
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
    </div>
  );
};

export default ChartCardsPhones;
