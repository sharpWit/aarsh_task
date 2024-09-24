import { Card } from '@mui/material';
import { chartsItems } from '../../libs/options';
import Grid from '@mui/material/Grid2';
import styles from './ChartCards.module.scss';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

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
    </div>
  );
};

export default ChartCardsPhones;
