import React from 'react';
import { Typography, Grid, CardContent } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';

const Facture = () => {
    return  (
    
       <PageContainer title="Typography" description="this is Typography">
  <text>nice test</text>
  <div>
      <h1>Displaying an Image from Public Directory</h1>
      <img src="/i.png" alt="My Local Image" />
    </div>
      </PageContainer>
    );
  }
   
  export default Facture;