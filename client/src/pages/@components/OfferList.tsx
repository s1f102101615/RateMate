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
  boxShadow: '0px 0px 3px #c9c9c9',
  padding: '16px 15px 20px 20px',
  margin: '5px 0',
  display: 'flex',
};

function OfferList({ companyName, description, width, height }: OfferListProps) {
  return (
    <Paper style={{ width, height, ...offerListStyle }}>
      <img
        src="/images/companyLogo.png"
        width={50}
        height={50}
        alt="logo"
        style={{ borderRadius: '20%', marginRight: '25px', marginTop: '5px' }}
      />
      <div style={{ flexDirection: 'column', width: '100%' }}>
        <span style={{ fontSize: 19, fontWeight: 600, color: '#505050' }}>{companyName}</span>
        <br />
        <span>{description}</span>
        <br />
        <div style={{ flexDirection: 'row' }}>
          <span>年収500$ </span>
          <span>L赤羽</span>
        </div>
        <div style={{ justifyContent: 'flex-end', display: 'flex', marginTop: -5 }}>
          2023/10/27 残り?日
        </div>
      </div>
    </Paper>
  );
}

export default OfferList;
