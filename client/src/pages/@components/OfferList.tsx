import { Paper } from '@mui/material';
import type { CSSProperties } from 'react';

interface OfferListProps {
  companyName: string;
  description: string;
  width: string;
  height: string;
}

const offerListStyle: CSSProperties = {
  border: '1px solid #ddd',
  padding: '20px',
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
};

function OfferList({ companyName, description, width, height }: OfferListProps) {
  return (
    <Paper style={{ width, height, ...offerListStyle }}>
      <img
        src="/images/companyLogo.png"
        width={50}
        height={50}
        alt="logo"
        style={{ borderRadius: '20%' }}
      />
      <p>{companyName}</p>
      <p>{description}</p>
    </Paper>
  );
}

export default OfferList;
