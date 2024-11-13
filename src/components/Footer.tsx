import type React from 'react';
import logoFace from '../img/picto/Face.png';
import logoInsta from '../img/picto/Insta.png';
import logolink from '../img/picto/link.png';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#94AB6F',
        color: '#FFFFFF',
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          flex: '0 1 auto',
          textAlign: 'left',
        }}
      >
        <p style={{ margin: 0 }}>© The Plant Spot</p>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <img
          src={logoInsta}
          alt="Logo Instagram"
          style={{ width: '40px', height: '40px' }}
        />
        <img
          src={logolink}
          alt="Logo LinkedIn"
          style={{ width: '40px', height: '40px' }}
        />
        <img
          src={logoFace}
          alt="Logo Facebook"
          style={{ width: '40px', height: '40px' }}
        />
      </div>

      <div
        style={{
          flex: '0 1 auto',
          textAlign: 'right',
        }}
      >
        <a
          href="/terms"
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            margin: '0 10px',
          }}
        >
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
